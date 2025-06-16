// src/pages/StoriesPage.jsx
import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';

import { ScrollTrigger } from 'gsap/all';

import Navbar from '../components/common/Navbar';
import Footer from '../components/common/Footer';

// UPEWNIJ SIĘ, ŻE ŚCIEŻKA JEST POPRAWNA
import storyImage from '../assets/images/bikes/e-bike/e-bike-black-hero.jpg'; 

// --- Styled Components ---

const PageWrapper = styled.div`
  background-color: ${({ theme }) => theme.colors.primary || '#0a0a0a'};
  color: ${({ theme }) => theme.colors.white || '#fff'};
  font-family: ${({ theme }) => theme.fonts.main || '"PP Neue Montreal", sans-serif'};
  overflow-x: hidden;
`;

const PinnedSection = styled.section`
  height: 200vh; /* Zapewnia miejsce na scrollowanie i animację */
  position: relative;
`;

const StickyContainer = styled.div`
  position: sticky;
  top: 0;
  height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  padding-top: 100px;
  box-sizing: border-box;
`;

const StoryImageWrapper = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 70vw;
  height: 75vh;
  border-radius: 12px;
  overflow: hidden;
  
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    scale: 1.4; 
  }

  @media (max-width: 1024px) {
    width: 80vw;
    height: 70vh;
  }
  @media (max-width: 600px) {
    width: 90vw;
    height: 60vh;
  }
`;

const OverlayText = styled.div`
  position: relative;
  z-index: 2;
  text-align: center;
  color: white;
  max-width: 800px;
  opacity: 0;

  h2 {
    font-size: clamp(2rem, 5vw, 3.5rem);
    margin: 0 0 0.5rem 0;
    text-shadow: 2px 2px 8px rgba(0,0,0,0.7);
  }
  
  cite {
    font-size: 1.1rem;
    font-style: italic;
    opacity: 0.9;
    text-shadow: 1px 1px 4px rgba(0,0,0,0.5);
  }
`;

const AfterScrollContent = styled.section`
  position: relative;
  background-color: #0a0a0a;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 80vh;
  padding: 5rem 2rem;
`;

const TextBlock = styled.div`
  max-width: 700px;
  width: 100%;
  
  blockquote {
    margin: 0 0 2rem 0;
    padding-left: 1.5rem;
    border-left: 3px solid ${({ theme }) => theme.colors.accent || '#ccc'};
    font-size: 1.1rem;
    font-style: italic;
    line-height: 1.7;
    opacity: 0.9;
  }

  h3 {
    font-size: 1.5rem;
    margin-bottom: 1rem;
  }

  ul {
    list-style: none;
    padding: 0;
    margin-bottom: 1.5rem;
    li {
      margin-bottom: 0.5rem;
      padding-left: 1.5rem;
      position: relative;
      &::before {
        content: '✔';
        color: #28a745;
        position: absolute;
        left: 0;
      }
    }
  }

  .story-link {
    display: inline-block;
    margin-top: 1rem;
    font-weight: bold;
    color: #fff;
    text-decoration: underline;
    &:hover {
      color: #ccc;
    }
  }
`;

const StoriesPage = () => {
  const gsap = window.gsap;
  const pageWrapperRef = useRef(null);
  
  useEffect(() => {
    if (!gsap) {
      console.error("GSAP not available!");
      return;
    }
    
    gsap.registerPlugin(ScrollTrigger);

    const context = gsap.context(() => {
      const image = ".story-image-main";
      const overlayText = ".story-overlay-text";

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: ".story-pin-section",
          start: "top top",
          end: "bottom bottom",
          scrub: 0.5,
          pin: ".story-sticky-container"
        }
      });

      tl.to(image, { scale: 1 }, 0);
      tl.fromTo(overlayText, 
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.5 }, 
        0.1
      ).to(overlayText, 
        { opacity: 0, y: -30, duration: 0.5 }, 
        0.5
      );
    }, pageWrapperRef);

    return () => context.revert();

  }, [gsap]);

  return (
    <PageWrapper ref={pageWrapperRef}>
      <Navbar animate={true} variant="dark" /> 
      
      <main>
        {/* --- JEDNA SEKCJA Z ANIMACJĄ --- */}
        <PinnedSection className="story-pin-section">
          <StickyContainer className="story-sticky-container">
            <StoryImageWrapper>
              <img src={storyImage} alt="RadanOr Bike Story" className="story-image-main" />
            </StoryImageWrapper>
            <OverlayText className="story-overlay-text">
              <h2>More than just commuting</h2>
              <cite>Julia M. – Commuter from Hamburg</cite>
            </OverlayText>
          </StickyContainer>
        </PinnedSection>

        {/* --- JEDNA SEKCJA Z TREŚCIĄ POD SPODEM --- */}
        <AfterScrollContent>
          <TextBlock>
            <blockquote>
              "The commute to work used to be stressful. Since I got the UrbanBike 5, my day starts with fresh air instead of honking cars. It's become my personal morning ritual."
            </blockquote>
            <h3>Why it's so convincing:</h3>
            <ul>
              <li>Stylish & lightweight – perfect for the city</li>
              <li>Fast, maneuverable, with a smart lighting system</li>
              <li>Suitable for everyday use + low maintenance</li>
            </ul>
            <a href="#" className="story-link">👉 For those who want more from their commute.</a>
            
            <h2 style={{marginTop: "4rem"}}>At home on any trail</h2>
            <cite>– Mountain Bike</cite>
          </TextBlock>
        </AfterScrollContent>
      </main>

      <Footer animate={true} /> 
    </PageWrapper>
  );
};

export default StoriesPage;

