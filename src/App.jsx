// src/App.jsx
import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Importy stron
import Home from './pages/Home.jsx';
import AllBikesPage from './pages/AllBikesPage.jsx';
import BikeCategoryPage from './pages/BikeCategoryPage.jsx';
import BikeDetailPage from './pages/BikeDetailPage.jsx';
import AboutPage from './pages/AboutPage.jsx';
import StoriesPage from './pages/StoriesPage.jsx';
import LoginPage from './pages/LoginPage.jsx';
import CartPage from './pages/CartPage.jsx';
import CheckoutPage from './pages/CheckoutPage.jsx';
import OrderSuccessPage from './pages/OrderSuccessPage.jsx';
import ContactPage from './pages/ContactPage.jsx';
import FAQPage from './pages/FAQPage.jsx';
import ShippingReturnsPage from './pages/ShippingReturnsPage.jsx';
import PrivacyPolicyPage from './pages/PrivacyPolicyPage.jsx';
import TermsOfServicePage from './pages/TermsOfServicePage.jsx';
import SizeGuidePage from './pages/SizeGuidePage.jsx';
import AccountPage from './pages/AccountPage.jsx';
import ProfileDetailsPage from './pages/account/ProfileDetailsPage.jsx';
import AddressPage from './pages/account/AddressPage.jsx';
import ChangePasswordPage from './pages/account/ChangePasswordPage.jsx';
import DeleteAccountPage from './pages/account/DeleteAccountPage.jsx';
import OrderHistoryPage from './pages/account/OrderHistoryPage.jsx';
import ReturnsPage from './pages/account/ReturnsPage.jsx';

// Importy Kontekstów i Komponentów
import { CartProvider } from './contexts/CartContext.jsx';
import { AuthProvider } from './contexts/AuthContext.jsx';
import LoaderOverlay from './components/LoaderOverlay.jsx';

// Importy GSAP
import gsap from 'gsap';
import { CustomEase } from 'gsap/CustomEase';
import { ScrollTrigger } from 'gsap/ScrollTrigger'; 


if (typeof window !== "undefined") {
  window.gsap = gsap;
  gsap.registerPlugin(CustomEase, ScrollTrigger); 
  if (!CustomEase.get("hop")) CustomEase.create("hop", "0.9, 0, 0.1, 1");
  if (!CustomEase.get("custom")) CustomEase.create("custom", ".87,0,.13,1");
}

const App = () => {
  const [isLoaderAnimationComplete, setIsLoaderAnimationComplete] = useState(
    sessionStorage.getItem('loaderAnimationComplete') === 'true'
  );

  const handleLoaderLoaded = () => {
    sessionStorage.setItem('loaderAnimationComplete', 'true');
    setIsLoaderAnimationComplete(true);
  };

  return (
    <AuthProvider>
      <CartProvider>
        <Router>
          {!isLoaderAnimationComplete && (
            <LoaderOverlay onLoaded={handleLoaderLoaded} />
          )}
          <Routes>
            <Route path="/" element={<Home isAppReady={isLoaderAnimationComplete} />} />
            <Route path="/all-bikes" element={<AllBikesPage isAppReady={isLoaderAnimationComplete} />} />
            <Route path="/bikes/:categoryName" element={<BikeCategoryPage isAppReady={isLoaderAnimationComplete} />} />
            <Route path="/bike/:bikeId" element={<BikeDetailPage isAppReady={isLoaderAnimationComplete} />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/stories" element={<StoriesPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/cart" element={<CartPage />} />
            <Route path="/checkout" element={<CheckoutPage />} />
            <Route path="/order-success" element={<OrderSuccessPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/faq" element={<FAQPage />} />
            <Route path="/shipping-returns" element={<ShippingReturnsPage />} />
            <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
            <Route path="/terms-of-service" element={<TermsOfServicePage />} />
            <Route path="/size-guide" element={<SizeGuidePage />} />
            <Route path="/account" element={<AccountPage />}>
              <Route index element={<ProfileDetailsPage />} />
              <Route path="profile" element={<ProfileDetailsPage />} />
              <Route path="address" element={<AddressPage />} />
              <Route path="password" element={<ChangePasswordPage />} />
              <Route path="orders" element={<OrderHistoryPage />} />
              <Route path="returns" element={<ReturnsPage />} />
              <Route path="delete" element={<DeleteAccountPage />} />
            </Route>
          </Routes>
        </Router>
      </CartProvider>
    </AuthProvider>
  );
};

export default App;
