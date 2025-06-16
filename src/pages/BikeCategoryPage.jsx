// src/pages/BikeCategoryPage.jsx
import React, { useEffect, useRef, useMemo } from 'react';
import { useParams, Link as RouterLink } from 'react-router-dom';
import styled from 'styled-components';
// import gsap from 'gsap'; // USUNIĘTO - będziemy używać window.gsap

import Navbar from '../components/common/Navbar';
import Footer from '../components/common/Footer';
import BikeCard from '../components/bikes/BikeCard';
import { allBikesData } from '../data/allBikesData.js';

const CategoryPageWrapper = styled.div`
  width: 100%;
  min-height: 100vh;
  background-color: ${({ theme }) => theme.colors.primary || '#0a0a0a'};
  color: ${({ theme }) => theme.colors.text || '#fff'};
  box-sizing: border-box;
  opacity: 0; 
  visibility: hidden;
  will-change: opacity;
  display: flex; 
  flex-direction: column; 
`;

const MainContent = styled.main`
  flex-grow: 1;
  padding-top: 100px; 
  padding-bottom: 3rem;
`;

const PageHeader = styled.div`
  text-align: center;
  margin-bottom: 2.5rem;
  padding: 0 1rem;
`;

const CategoryTitle = styled.h1`
  font-size: clamp(2rem, 5vw, 2.8rem);
  font-family: ${({ theme }) => theme.fonts.main};
  color: ${({ theme }) => theme.colors.text || '#fff'};
  text-transform: capitalize;
  margin-top: 0;
  margin-bottom: 0;
`;

const Breadcrumbs = styled.div`
  font-size: 0.9rem;
  margin-bottom: 1rem;
  a {
    color: ${({ theme }) => theme.colors.accent || '#ccc'};
    text-decoration: none;
    &:hover {
      text-decoration: underline;
    }
  }
  span {
    margin: 0 0.5em;
    color: ${({ theme }) => theme.colors.darkGrey || '#888'};
  }
`;

const BikesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); 
  gap: 2rem; 
  padding: 0 2rem; 
  max-width: 1400px; 
  margin: 0 auto; 
`;

const NoItemsMessage = styled.p`
  text-align: center;
  font-size: 1.2rem;
  margin-top: 3rem;
`;

const BikeCategoryPage = ({ isAppReady }) => { // Usunięto gsapInstance z propsów
  const gsap = window.gsap; // Użyj globalnej instancji GSAP
  const pageWrapperRef = useRef(null);
  const { categoryName } = useParams();

  // console.log("[BikeCategoryPage.jsx] Component rendered. isAppReady:", isAppReady, "categoryName:", categoryName);
  // if (gsap && gsap.plugins) {
  //   console.log("[BikeCategoryPage.jsx] window.gsap.plugins.css available:", !!gsap.plugins.css);
  // }

  const bikesInCategory = useMemo(() => {
    if (!categoryName || !allBikesData) return [];
    return allBikesData.filter(
      bike => bike.category.toLowerCase().replace(/\s+/g, '-') === categoryName.toLowerCase()
    );
  }, [categoryName]);

  useEffect(() => {
    if (!gsap) { 
      console.error("[BikeCategoryPage.jsx] window.gsap not available for animation!");
      if (pageWrapperRef.current && isAppReady) {
        pageWrapperRef.current.style.opacity = '1';
        pageWrapperRef.current.style.visibility = 'visible';
      }
      return; 
    }
    const wrapper = pageWrapperRef.current;
    if (wrapper) {
      gsap.set(wrapper, { opacity: 0, visibility: 'hidden'}); 
      if (isAppReady) { 
        gsap.to(wrapper, {
          opacity: 1,
          visibility: 'visible',
          duration: 0.5,
          delay: 0.1 
        });
      }
    }
  }, [isAppReady, gsap, categoryName]); // Dodano gsap do zależności

  if (typeof window !== "undefined" && !window.gsap && isAppReady) {
      console.error("[BikeCategoryPage.jsx] Cannot render because window.gsap is not available and app is ready.");
      return <div style={{padding: "100px", textAlign: "center", color: "white"}}>GSAP not available for BikeCategoryPage.</div>;
  }
  if (!isAppReady && (typeof window !== "undefined" && !sessionStorage.getItem('loaderAnimationComplete'))) {
      return null; 
  }

  const pageTitle = categoryName ? categoryName.replace(/-/g, ' ') : "Bike Category";

  return (
    <>
      <Navbar animate={isAppReady} /> {/* Navbar użyje window.gsap */}
      <CategoryPageWrapper ref={pageWrapperRef}>
        <MainContent>
          <PageHeader>
            <Breadcrumbs>
              <RouterLink to="/all-bikes">All Categories</RouterLink>
              <span>&gt;</span>
              {pageTitle}
            </Breadcrumbs>
            <CategoryTitle>{pageTitle}</CategoryTitle>
          </PageHeader>
          
          {bikesInCategory.length > 0 ? (
            <BikesGrid>
              {bikesInCategory.map(bike => (
                <BikeCard
                  key={bike.id}
                  id={bike.id}
                  image={bike.mainImage}
                  title={bike.name} 
                  description={bike.features ? bike.features.slice(0, 2).join(' - ') : (bike.description ? bike.description.substring(0, 100) + '...' : '')} 
                  altText={bike.altText || bike.name}
                  // BikeCard nie potrzebuje gsapInstance
                />
              ))}
            </BikesGrid>
          ) : (
            <NoItemsMessage>No bikes found in the "{pageTitle}" category.</NoItemsMessage>
          )}
        </MainContent>
        <Footer animate={isAppReady} /> {/* Footer użyje window.gsap */}
      </CategoryPageWrapper>
    </>
  );
};

export default BikeCategoryPage;