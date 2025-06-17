// src/components/LoaderOverlay.jsx
import React, { useEffect, useRef } from 'react';
import styled, { keyframes } from 'styled-components';

// --- DEFINICJE ANIMACJI (Keyframes) ---

// Animacja dla pojawiania się i znikania cyfr/tekstu
const slideAndFade = keyframes`
  0% { transform: translateY(100%); opacity: 0; }
  20% { transform: translateY(0); opacity: 1; }
  80% { transform: translateY(0); opacity: 1; }
  100% { transform: translateY(-100%); opacity: 0; }
`;

// Animacja dla pojawiania się logo
const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
`;

// --- Styled Components ---

const LoaderWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: ${({ theme }) => theme.colors.primary || '#0a0a0a'};
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 9999;
  overflow: hidden;
  /* Animacja zanikania całego loadera na końcu */
  animation: ${fadeIn} 0.5s reverse forwards;
  animation-delay: 6s; /* Całkowity czas trwania animacji wewnętrznych */
`;

const CounterContainer = styled.div`
  position: relative;
  /* Ten kontener zapewnia, że wszystko jest idealnie na środku */
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 200px; /* Wysokość dla największej cyfry, zapobiega skakaniu layoutu */
`;

// Każda cyfra/słowo będzie osobnym elementem, animowanym z opóźnieniem
const CounterItem = styled.div`
  position: absolute;
  font-family: ${({ theme }) => theme.fonts.special || 'serif'};
  color: ${({ theme }) => theme.colors.text || '#fff'};
  font-weight: 400;
  line-height: 1;
  opacity: 0; /* Na początku niewidoczne */
  animation: ${slideAndFade} 1s ease-in-out forwards;
  animation-delay: ${props => props.$delay}s;

  /* Ustawienie różnych rozmiarów czcionki */
  &.number { font-size: clamp(8rem, 25vw, 15rem); }
  &.text { font-size: clamp(4rem, 15vw, 8rem); }
`;

const IntroLogoContainer = styled.div`
  position: absolute;
  opacity: 0; /* Na początku niewidoczne */
  animation: ${fadeIn} 0.8s ease-out forwards;
  animation-delay: 5s; /* Pojawia się po zakończeniu odliczania */
  
  h1 {
    font-family: ${({ theme }) => theme.fonts.main || 'sans-serif'};
    font-size: 2.5rem;
    color: ${({ theme }) => theme.colors.text || '#fff'};
    margin: 0;
    span {
      font-family: ${({ theme }) => theme.fonts.special || 'serif'};
      font-style: italic;
    }
  }
`;

const LoaderOverlay = ({ onLoaded }) => {
  const loaderWrapperRef = useRef(null);
  const counterData = ["3", "2", "1", "and", "GO!"];

  useEffect(() => {
    // Ta funkcja jest teraz znacznie prostsza.
    // Jej jedynym zadaniem jest ukrycie loadera po zakończeniu wszystkich animacji CSS.
    const totalAnimationTime = 6500; // 6.5 sekundy (6s na animacje + 0.5s na zniknięcie)
    
    const timer = setTimeout(() => {
      if (onLoaded) {
        onLoaded();
        sessionStorage.setItem('loaderAnimationComplete', 'true');
      }
      if (loaderWrapperRef.current) {
        loaderWrapperRef.current.style.display = 'none';
      }
    }, totalAnimationTime);

    return () => clearTimeout(timer); // Czyszczenie timera
  }, [onLoaded]);

  return (
    <LoaderWrapper ref={loaderWrapperRef}>
      <CounterContainer>
        {counterData.map((text, index) => (
          <CounterItem 
            key={text}
            className={isNaN(parseInt(text)) ? 'text' : 'number'}
            $delay={index * 1} // Każdy element startuje 1 sekundę po poprzednim
          >
            {text}
          </CounterItem>
        ))}
      </CounterContainer>
      
      <IntroLogoContainer>
        <h1><span>RadAnOr</span> Welcome!</h1>
      </IntroLogoContainer>
    </LoaderWrapper>
  );
};

export default LoaderOverlay;


