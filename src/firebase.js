// src/firebase.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// TWOJA UNIKALNA KONFIGURACJA Z FIREBASE
const firebaseConfig = {
  apiKey: "AIzaSyBMhCqdyPozFiCy3ACf-3vgoY8cbQ5YM8g",
  authDomain: "homepage3-project.firebaseapp.com",
  projectId: "homepage3-project",
  storageBucket: "homepage3-project.firebasestorage.app", 
  messagingSenderId: "790953605627",
  appId: "1:790953605627:web:523842e7d769e0c5e6335e"
};


// Inicjalizacja Firebase
const app = initializeApp(firebaseConfig);

// Inicjalizacja i eksport usług
export const auth = getAuth(app);
export const db = getFirestore(app);

export default app;