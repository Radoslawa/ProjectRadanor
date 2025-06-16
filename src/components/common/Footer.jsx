// src/components/common/Footer.jsx
import React, { useRef, useEffect } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
// import gsap from 'gsap'; // USUNIĘTO - będziemy używać window.gsap

const FooterWrapper = styled.footer`
  width: 100%;
  padding: 2.5em 1.5em; 
  background-color: ${({ theme }) => theme.colors.secondary || '#1c1c1c'}; 
  border-top: 1px solid ${({ theme }) => theme.colors.darkGrey || '#333'};
  display: flex;
  flex-direction: column; 
  align-items: center; 
  gap: 1.5rem; 
  text-align: center;
  color: ${({ theme }) => theme.colors.textLight || '#ccc'};
  font-size: 0.9rem;
  margin-top: auto; /* Kluczowe dla sticky footer, jeśli PageWrapper ma display:flex; flex-direction:column; min-height:100vh; */

  opacity: 0;
  visibility: hidden;
  transform: translateY(30px); 
  will-change: transform, opacity;

  @media (max-width: ${({ theme }) => theme.breakpoints.tabletS || '600px'}) {
    padding: 2em 1em;
    gap: 1rem;
  }
`;

const FooterLinks = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 1rem 1.5rem; 
  margin-bottom: 1rem;

  a {
    color: ${({ theme }) => theme.colors.textLight || '#ccc'};
    text-decoration: none;
    font-weight: 400; 
    transition: color 0.3s ease;
    font-size: 0.85rem;

    &:hover {
      color: ${({ theme }) => theme.colors.white || '#fff'};
    }
  }
`;

const SocialMediaIcons = styled.div`
  display: flex;
  justify-content: center;
  gap: 1.8rem; 
  margin-bottom: 1rem;

  a {
    color: ${({ theme }) => theme.colors.textLight || '#ccc'};
    font-size: 1.2rem; 
    transition: color 0.3s ease, transform 0.2s ease;

    &:hover {
      color: ${({ theme }) => theme.colors.white || '#fff'};
      transform: scale(1.15); 
    }
  }
`;

const CopyrightNotice = styled.p`
  margin: 0;
  font-size: 0.8rem;
  opacity: 0.8; 
`;

// Usunięto gsapInstance z propsów, showCounter, currentSlide, totalSlides
const Footer = ({ animate }) => { 
  const gsap = window.gsap; // Użyj globalnej instancji GSAP
  const footerRef = useRef(null);

  useEffect(() => {
    if (!gsap) { 
      console.error("[Footer.jsx] window.gsap not available for animation!"); 
      if(footerRef.current && animate){
        footerRef.current.style.opacity = '1';
        footerRef.current.style.visibility = 'visible';
        footerRef.current.style.transform = 'translateY(0px)';
      }
      return; 
    }
    
    const element = footerRef.current;
    if (element) {
      if (animate) { 
        // console.log("[Footer.jsx] Animating IN with window.gsap");
        gsap.to(element, {
            opacity: 1,
            visibility: 'visible',
            y: '0%', 
            duration: 0.8,
            ease: 'power2.out',
            // Opóźnienie, aby stopka pojawiła się jako ostatni element na stronie
            // Powinno być większe niż opóźnienia Navbar, HeroSection, CtaButton
            delay: 1.5 // Dostosuj ten delay
        });
      } else if (sessionStorage.getItem('loaderAnimationComplete') === 'true') { 
         gsap.set(element, { opacity: 1, visibility: 'visible', y: '0%' });
      } else { 
         gsap.set(element, { opacity: 0, visibility: 'hidden', y: '30px' });
      }
    }
  }, [animate, gsap]); // Dodano gsap do zależności

  if (typeof window !== "undefined" && !window.gsap && animate) {
      console.error("[Footer.jsx] Cannot animate because window.gsap is not available.");
      return null; 
  }

  return (
    <FooterWrapper ref={footerRef}>
      <FooterLinks>
        <Link to="/contact">Contact Us</Link> 
        <Link to="/faq">FAQ</Link>
        <Link to="/shipping-returns">Shipping & Returns</Link>
        <Link to="/size-guide">Size Guide</Link>
        <Link to="/privacy-policy">Privacy Policy</Link>
        <Link to="/terms-of-service">Terms of Service</Link>
      </FooterLinks>
      
      <SocialMediaIcons>
        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook"><i className="fab fa-facebook-f"></i></a>
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram"><i className="fab fa-instagram"></i></a>
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter"><i className="fab fa-twitter"></i></a>
        <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" aria-label="YouTube"><i className="fab fa-youtube"></i></a>
      </SocialMediaIcons>

      <CopyrightNotice>
        &copy; {new Date().getFullYear()} RadAnOr Bikes. Created by RadAnOr Team. All Rights Reserved.
        <br />
        Crafted with passion for two wheels.
      </CopyrightNotice>
    </FooterWrapper>
  );
};

export default Footer;