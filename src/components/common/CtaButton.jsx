// src/components/common/CtaButton.jsx
import React, { useRef, useEffect } from 'react';
import styled from 'styled-components';

const CtaWrapper = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  opacity: 0;
  visibility: hidden;
  transform: scale(0.9) translateY(30px);
  will-change: transform, opacity;
`;

const CtaButtonStyled = styled.a`
  display: inline-flex; 
  align-items: center;
  justify-content: space-between; 
  width: auto; 
  min-width: 280px;
  max-width: clamp(280px, 50%, 450px); 
  height: 60px;    
  padding: 0 0.75rem 0 1.5rem; 
  background-color: ${({ theme }) => theme.colors.white || '#fff'};
  border-radius: 12px; 
  text-decoration: none;
  cursor: pointer;
  transition: transform 0.3s ease-out;
  position: relative; 

  &:hover {
    transform: translateY(-2px) scale(1.02);
  }
`;

const CtaLabel = styled.span`
  flex-grow: 1; 
  text-align: center; 
  margin-right: 0.75rem; 
  
  color: ${({ theme }) => theme.colors.black || '#000'};
  font-family: ${({ theme }) => theme.fonts.main || '"PP Neue Montreal", sans-serif'};
  font-size: 25px; 
  font-weight: 500;
  text-transform: uppercase;
  white-space: nowrap;

  /* ---  Ustawienie line-height na 1 usuwa dodatkowe odstępy fontu --- */
  line-height: 0.1;

  /* Stan początkowy dla animacji */
  opacity: 0;
  transform: translateY(40%); 
  will-change: transform, opacity;
`;

const CtaIconWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 44px; 
  height: 44px; 
  background-color: ${({ theme }) => theme.colors.secondary || '#303030'};
  color: ${({ theme }) => theme.colors.white || '#fff'};
  border-radius: 50%;
  font-size: 1.1em;
  flex-shrink: 0;

  opacity: 0;
  transform: scale(0.5);
  will-change: transform, opacity;
`;

const CtaButton = ({ animate, href = "/all-bikes" }) => {
  const gsap = window.gsap;

  const ctaWrapperRef = useRef(null); 
  const ctaLabelRef = useRef(null);   
  const ctaIconRef = useRef(null);    

  useEffect(() => {
    if (!gsap) { 
      console.error("[CtaButton.jsx] window.gsap not available!"); 
      return; 
    }

    const wrapper = ctaWrapperRef.current;
    const label = ctaLabelRef.current;
    const icon = ctaIconRef.current;

    if (wrapper && label && icon) {
      gsap.set(wrapper, { scale: 0.9, y: 30, opacity: 0, visibility: 'hidden' });
      gsap.set(label, { yPercent: 40, opacity: 0 }); 
      gsap.set(icon, { scale: 0.5, opacity: 0 });

      if (animate) {
        const tl = gsap.timeline({ delay: 1.2 });
        
        tl.to(wrapper, {
            scale: 1, y: 0, opacity: 1, visibility: 'visible',
            duration: 1, ease: 'power2.out'
        }, 0);
        
        tl.to(label, {
            yPercent: 0, 
            opacity: 1,
            duration: 0.8, 
            ease: 'power3.out'
        }, "-=0.7"); 
        
        tl.to(icon, {
            scale: 1, opacity: 1,
            duration: 0.8, 
            ease: 'back.out(1.7)'
        }, "<0.1"); 

      } else if (sessionStorage.getItem('loaderAnimationComplete') === 'true') { 
        gsap.set(wrapper, { opacity: 1, visibility: 'visible', scale: 1, y: 0 });
        gsap.set(label, { yPercent: 0, opacity: 1 }); 
        gsap.set(icon, { scale: 1, opacity: 1 });
      }
    }
  }, [animate, gsap]);

  
  return (
    <CtaWrapper ref={ctaWrapperRef}>
      <CtaButtonStyled href={href}>
        <CtaLabel ref={ctaLabelRef}>View all products</CtaLabel>
        <CtaIconWrapper ref={ctaIconRef}><i className="fas fa-arrow-right"></i></CtaIconWrapper>
      </CtaButtonStyled>
    </CtaWrapper>
  );
};

export default CtaButton;


