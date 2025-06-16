// src/contexts/CartContext.jsx
import React, { createContext, useState, useEffect, useContext } from 'react';
import { useAuth } from './AuthContext';
import { db } from '../firebase';
import { doc, getDoc, setDoc } from "firebase/firestore";

const CartContext = createContext();

export const useCart = () => {
  return useContext(CartContext);
};

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  const { currentUser } = useAuth();

  // Funkcja do zapisu koszyka w Firestore dla zalogowanego użytkownika
  const saveCartToFirestore = async (items) => {
    if (currentUser) {
      const cartDocRef = doc(db, "users", currentUser.uid);
      await setDoc(cartDocRef, { cart: items }, { merge: true });
    }
  };

  // Efekt do zarządzania koszykiem przy zmianie stanu logowania
  useEffect(() => {
    const manageUserCart = async () => {
      if (currentUser) {
        // Użytkownik jest zalogowany: wczytaj jego koszyk z Firestore.
        const cartDocRef = doc(db, "users", currentUser.uid);
        const docSnap = await getDoc(cartDocRef);
        
        // Sprawdź, czy w localStorage jest tymczasowy koszyk (z czasu, gdy użytkownik był gościem)
        const localCartData = localStorage.getItem('shoppingCart');
        const localCart = localCartData ? JSON.parse(localCartData) : [];

        if (docSnap.exists() && docSnap.data().cart) {
          // Jeśli użytkownik ma już koszyk w bazie, użyj go
          setCartItems(docSnap.data().cart);
        } else if (localCart.length > 0) {
          // Jeśli nie ma koszyka w bazie, ale ma w localStorage, zapisz go do bazy
          setCartItems(localCart);
          await saveCartToFirestore(localCart);
        }
        // Po zalogowaniu zawsze czyść koszyk z localStorage
        localStorage.removeItem('shoppingCart');
      } else {
        // Użytkownik jest wylogowany: wczytaj koszyk z localStorage
        const localData = localStorage.getItem('shoppingCart');
        setCartItems(localData ? JSON.parse(localData) : []);
      }
    };

    manageUserCart();
  }, [currentUser]);

  // Ogólna funkcja do aktualizacji koszyka
  const updateCart = (newItems) => {
    setCartItems(newItems);
    if (currentUser) {
      saveCartToFirestore(newItems);
    } else {
      localStorage.setItem('shoppingCart', JSON.stringify(newItems));
    }
  };

  const addItemToCart = (product, selectedSize) => {
    setCartItems(prevItems => {
      const cartItemId = `${product.id}-${selectedSize || 'onesize'}`;
      const existingItem = prevItems.find(item => item.cartId === cartItemId);
      let newItems;
      
      if (existingItem) {
        newItems = prevItems.map(item =>
          item.cartId === cartItemId ? { ...item, quantity: item.quantity + 1 } : item
        );
      } else {
        newItems = [...prevItems, { ...product, size: selectedSize, quantity: 1, cartId: cartItemId }];
      }
      // Zapisz zmiany
      if (currentUser) {
        saveCartToFirestore(newItems);
      } else {
        localStorage.setItem('shoppingCart', JSON.stringify(newItems));
      }
      return newItems;
    });
  };

  const removeItemFromCart = (cartId) => {
    const newItems = cartItems.filter(item => item.cartId !== cartId);
    updateCart(newItems);
  };

  const updateItemQuantity = (cartId, newQuantity) => {
    let newItems;
    if (newQuantity <= 0) {
      newItems = cartItems.filter(item => item.cartId !== cartId);
    } else {
      newItems = cartItems.map(item =>
        item.cartId === cartId ? { ...item, quantity: newQuantity } : item
      );
    }
    updateCart(newItems);
  };
  
  const clearCart = () => {
    updateCart([]);
  };

  const value = {
    cartItems,
    addItemToCart,
    removeItemFromCart,
    updateItemQuantity,
    clearCart,
  };

  return (
    <CartContext.Provider value={value}>
      {children}
    </CartContext.Provider>
  );
};