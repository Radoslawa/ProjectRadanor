// src/pages/Home.jsx
import React, { useRef, useEffect, useState } from 'react';
import styled, { keyframes } from 'styled-components';
import { useLocation } from 'react-router-dom';

import heroBackgroundImageFile from '../assets/images/hero.jpg'; 
import Navbar from '../components/common/Navbar';
import HeroSection from '../components/home/HeroSection';
import CtaButton from '../components/common/CtaButton';
import Slider from '../components/home/Slider';
import Footer from '../components/common/Footer';

const HomeWrapper = styled.div`
  position: relative; 
  width: 100%;
  background-color: ${({ theme }) => theme.colors.primary || '#0a0a0a'};
  opacity: 0; 
  visibility: hidden; 
  will-change: opacity;
`;

const HeroBackgroundAndContentWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 100vh; /* Na razie wracamy do 100vh dla stabilności */
  display: flex;
  flex-direction: column;
  color: ${({ theme }) => theme.colors.white || '#fff'};
`;

const HeroBackgroundImage = styled.div`
  position: absolute;
  top: 0; left: 0;
  width: 100%;
  height: 100%;
  z-index: 0;
  
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transform: scale(1.5);
    opacity: 0;
    will-change: transform, opacity;
  }
`;

const ContentAboveSlider = styled.div`
  position: relative;
  z-index: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  flex-grow: 1;
  width: 100%;
`;

const slideInDown = keyframes`
  from { transform: translate(-50%, -150%); opacity: 0; }
  to { transform: translate(-50%, 0); opacity: 1; }
`;

const SuccessBanner = styled.div`
  position: fixed;
  top: 100px;
  left: 50%;
  transform: translateX(-50%);
  background-color: #28a745;
  color: white;
  padding: 1.25rem 2.5rem;
  border-radius: 8px;
  box-shadow: 0 4px 12px rgba(0,0,0,0.2);
  z-index: 2000;
  display: flex;
  align-items: center;
  gap: 1.5rem;
  font-size: 1.1rem;
  font-weight: 500;
  animation: ${slideInDown} 0.5s ease-out;

  button {
    background: none;
    border: none;
    color: white;
    font-size: 1.5rem;
    line-height: 1;
    cursor: pointer;
    padding: 0 0 0 0.5rem;
  }
`;

const Home = ({ isAppReady }) => {
  const gsap = window.gsap; 
  const location = useLocation();
  const homeWrapperRef = useRef(null);
  const heroBgImageRef = useRef(null); 
  const sliderActivationRef = useRef(null); // Użyjemy tego diva jako triggera

  const [isSliderActive, setIsSliderActive] = useState(false); 
  const [successMessage, setSuccessMessage] = useState(location.state?.message);

  useEffect(() => {
    if (successMessage) {
      const timer = setTimeout(() => {
        setSuccessMessage(null);
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [successMessage]);

 useEffect(() => {
    if (!gsap) return;
    const homeWrapper = homeWrapperRef.current;
    const heroBgImg = heroBgImageRef.current;

    // Najpierw upewnij się, że główny kontener jest widoczny
    if (isAppReady && homeWrapper) {
      gsap.to(homeWrapper, { opacity: 1, visibility: 'visible', duration: 0.01 });
    }
    
    // Uruchom animację tła tylko jeśli aplikacja jest gotowa
    if (isAppReady && heroBgImg) {
      // Używamy fromTo dla pełnej kontroli nad animacją
      gsap.fromTo(heroBgImg, 
        { scale: 1.5, opacity: 0 }, // Stan początkowy (powiększony i niewidoczny)
        { 
          scale: 1,                 // Stan końcowy (normalny rozmiar)
          opacity: 1,               // Stan końcowy (w pełni widoczny)
          duration: 2,              // Czas trwania animacji
          ease: "power2.out"        // Wygładzenie
        }
      );
    }
  }, [isAppReady, gsap]);


  useEffect(() => {
    if (!isAppReady || !gsap) return;
    
    // Używamy prostego listenera scroll, który jest bardziej niezawodny
    const handleScroll = () => {
      const activationTrigger = sliderActivationRef.current;
      if (!activationTrigger) return;
      const activationRect = activationTrigger.getBoundingClientRect();
      
      if (activationRect.top < window.innerHeight * 0.3) {
        if (!isSliderActive) {
          setIsSliderActive(true);
          document.body.style.overflowY = 'hidden';
        }
      } else {
        if (isSliderActive) {
          setIsSliderActive(false);
          document.body.style.overflowY = 'auto';
        }
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      document.body.style.overflowY = 'auto';
    };
  }, [isAppReady, isSliderActive, gsap]);

  return (
    <HomeWrapper ref={homeWrapperRef}>
      {successMessage && (
        <SuccessBanner>
          <span>{successMessage}</span>
          <button onClick={() => setSuccessMessage(null)}>&times;</button>
        </SuccessBanner>
      )}

      <HeroBackgroundAndContentWrapper>
        <HeroBackgroundImage>
          <img src={heroBackgroundImageFile} alt="RadAnOr Bikes - Hero Background" ref={heroBgImageRef} />
        </HeroBackgroundImage>
        <Navbar animate={isAppReady} /> 
        <ContentAboveSlider>
          <HeroSection animate={isAppReady} />
          <div style={{ paddingBottom: '10vh', width: '100%', display: 'flex', justifyContent: 'center' }}>
            <CtaButton animate={isAppReady} href="/all-bikes" />
          </div>
        </ContentAboveSlider>
      </HeroBackgroundAndContentWrapper>

      <div ref={sliderActivationRef} style={{ height: '1px' }}></div>

      {isAppReady && <Slider isActive={isSliderActive} />}
      <Footer animate={isAppReady} /> 
    </HomeWrapper>
  );
};
export default Home;



