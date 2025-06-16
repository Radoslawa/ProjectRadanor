// src/contexts/AuthContext.jsx
import React, { createContext, useState, useEffect, useContext } from 'react';
import { 
  createUserWithEmailAndPassword, 
  signInWithEmailAndPassword, 
  onAuthStateChanged,
  signOut,
  updateProfile,
  deleteUser,
  EmailAuthProvider,
  reauthenticateWithCredential, 
  updatePassword 
} from "firebase/auth";
import { auth, db } from '../firebase';
import { doc, setDoc } from "firebase/firestore";

const AuthContext = createContext();

export const useAuth = () => {
  return useContext(AuthContext);
};

export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const [loading, setLoading] = useState(true);

  async function register(userData) {
    const { email, password, firstName, lastName, street, city, postalCode, country } = userData;
    
    // 1. Stwórz użytkownika w systemie autentykacji Firebase
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    const user = userCredential.user;
    
    // 2. Zaktualizuj jego podstawowy profil (imię będzie widoczne od razu po zalogowaniu)
    await updateProfile(user, {
      displayName: firstName 
    });

    // 3. Stwórz dokument w bazie danych Firestore, aby przechowywać wszystkie dane
    const userDocRef = doc(db, "users", user.uid);
    await setDoc(userDocRef, {
      uid: user.uid,
      email,
      firstName,
      lastName,
      street: street || '', 
      city: city || '',
      postalCode: postalCode || '',
      country: country || ''
    });

    // 4. Zaktualizuj stan w aplikacji
    setCurrentUser({
      ...user,
      displayName: firstName,
    });
    
    return userCredential;
  }

  function login(email, password) {
    return signInWithEmailAndPassword(auth, email, password);
  }

  function logout() {
    return signOut(auth);
  }

  function deleteAccount() {
    if (auth.currentUser) {
      // W przyszłości tutaj dodamy też usuwanie dokumentu z Firestore
      return deleteUser(auth.currentUser);
    }
    return Promise.reject(new Error("No user is currently signed in."));
  }

   async function updateUserPassword(currentPassword, newPassword) {
    if (currentUser) {
      // Krok 1: Ponownie uwierzytelnij użytkownika
      const credential = EmailAuthProvider.credential(currentUser.email, currentPassword);
      await reauthenticateWithCredential(currentUser, credential);
      
      // Krok 2: Zmień hasło
      await updatePassword(currentUser, newPassword);
    } else {
      throw new Error("No user is currently signed in.");
    }
  }

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, user => {
      setCurrentUser(user);
      setLoading(false);
    });
    return unsubscribe;
  }, []);

 const value = {
    currentUser,
    register,
    login,
    logout,
    deleteAccount,
    updateUserPassword, // Udostępniamy nową funkcję
  };


  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
};
