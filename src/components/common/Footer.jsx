// src/components/common/Footer.jsx
import React, { useRef, useEffect } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

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
  margin-top: auto;

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

const Footer = ({ animate }) => { 
  const { t } = useTranslation();
  const gsap = window.gsap;
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
        gsap.to(element, {
            opacity: 1,
            visibility: 'visible',
            y: '0%', 
            duration: 0.8,
            ease: 'power2.out',
            delay: 1.5 
        });
      } else if (sessionStorage.getItem('loaderAnimationComplete') === 'true') { 
         gsap.set(element, { opacity: 1, visibility: 'visible', y: '0%' });
      } else { 
         gsap.set(element, { opacity: 0, visibility: 'hidden', y: '30px' });
      }
    }
  }, [animate, gsap]);

  return (
    <FooterWrapper ref={footerRef}>
      <FooterLinks>
        <Link to="/contact">{t('footer_contact')}</Link> 
        <Link to="/faq">{t('footer_faq')}</Link>
        <Link to="/shipping-returns">{t('footer_shipping')}</Link>
        <Link to="/size-guide">{t('footer_size_guide')}</Link>
        <Link to="/privacy-policy">{t('footer_privacy')}</Link>
        <Link to="/terms-of-service">{t('footer_terms')}</Link>
      </FooterLinks>
      
      <SocialMediaIcons>
        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook"><i className="fab fa-facebook-f"></i></a>
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram"><i className="fab fa-instagram"></i></a>
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter"><i className="fab fa-twitter"></i></a>
        <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" aria-label="YouTube"><i className="fab fa-youtube"></i></a>
      </SocialMediaIcons>

      <CopyrightNotice>
        © {new Date().getFullYear()} RadAnOr Bikes. Created by RadAnOr Team. All Rights Reserved.
        <br />
        Crafted with passion for two wheels.
      </CopyrightNotice>
    </FooterWrapper>
  );
};

export default Footer;