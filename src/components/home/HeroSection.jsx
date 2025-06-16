// src/components/home/HeroSection.jsx
import React, { useRef, useEffect } from 'react';
import styled from 'styled-components';
import { useTranslation, Trans } from 'react-i18next'; 

const HeroWrapper = styled.section`
    width: 100%;
    padding-top: 32vh; 
    padding-bottom: 10vh; 
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1.5em; 
    color: ${({ theme }) => theme.colors.text || '#fff'};
    text-align: center; 
    overflow: hidden; 
`;

const HeroCopy = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.5em; 
`;

const Line = styled.div`
    overflow: hidden;
`;

const HeroHeading = styled.h1`
    font-size: clamp(2.5rem, 8vw, 5rem); 
    font-weight: 500;
    line-height: 1.1;
    color: inherit;
    margin: 0; 
    transform: translateY(120%);
    opacity: 0;
    will-change: transform, opacity;

    span {
        font-family: ${({ theme }) => theme.fonts.special || '"PP Editorial Old", sans-serif'};
        font-style: italic;
    }
`;

const HeroParagraph = styled.p`
    font-size: clamp(1.3rem, 5vw, 1.7rem); 
    font-weight: 450; 
    line-height: 1.7;
    color: inherit;
    max-width: 660px; 
    margin: 0 auto; 
    padding: 0 1em; 
    transform: translateY(100px); 
    opacity: 0;
    will-change: transform, opacity;
`;

const HeroSection = ({ animate }) => {
  const { t } = useTranslation(); // <-- Użyj hooka do pobrania funkcji tłumaczącej
  const gsap = window.gsap;

  const heading1Ref = useRef(null);
  const heading2Ref = useRef(null);
  const paragraphRef = useRef(null);

  useEffect(() => {
    if (!gsap) { console.error("[HeroSection.jsx] window.gsap is not available!"); return; }
    const h1 = heading1Ref.current;
    const h2 = heading2Ref.current;
    const p = paragraphRef.current;

    if (h1 && h2 && p) {
        gsap.set([h1, h2], { y: '120%', opacity: 0 });
        gsap.set(p, { y: '100px', opacity: 0 });

        if (animate) {
            const tl = gsap.timeline({ defaults: { duration: 1, ease: 'power3.out' }, delay: 0.9 });
            tl.to(h1, { y: '0%', opacity: 1 });
            tl.to(h2, { y: '0%', opacity: 1 }, "-=0.8"); 
            tl.to(p, { y: '0%', opacity: 1 }, "-=0.7");
        } else if (sessionStorage.getItem('loaderAnimationComplete') === 'true') { 
             gsap.set([h1, h2, p], { y: '0%', opacity: 1, visibility: 'visible' });
        }
    }
  }, [animate, gsap]);

  return (
    <HeroWrapper>
      <HeroCopy>
        <Line>
          <HeroHeading ref={heading1Ref}>
            {/* Użycie komponentu Trans do tłumaczenia tekstu z zagnieżdżonymi elementami */}
            <Trans i18nKey="welcomeMessage">
              <span>Rooted</span> in passion,
            </Trans>
          </HeroHeading>
        </Line>
        <Line>
          <HeroHeading ref={heading2Ref}>
            grown with <span>strength.</span>
          </HeroHeading>
        </Line>
      </HeroCopy>
      <Line> 
        {/* Użycie funkcji t() do prostego tłumaczenia tekstu */}
        <HeroParagraph ref={paragraphRef}>
          {t('bikeLoversMessage')}
        </HeroParagraph>
      </Line>
    </HeroWrapper>
  );
};

export default HeroSection;
