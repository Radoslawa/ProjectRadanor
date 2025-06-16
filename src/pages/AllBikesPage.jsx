// src/pages/AllBikesPage.jsx
import React, { useEffect, useRef, useMemo } from 'react';
import styled from 'styled-components';
import { Link as RouterLink } from 'react-router-dom';
// import gsap from 'gsap'; // USUNIĘTO - będziemy używać window.gsap

import Navbar from '../components/common/Navbar';
import Footer from '../components/common/Footer';
import CategoryCard from '../components/categories/CategoryCard';
import { getUniqueCategories } from '../data/allBikesData.js';

const AllBikesPageWrapper = styled.div`
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

// DEFINICJA BRAKUJĄCEGO PageHeader
const PageHeader = styled.div`
  text-align: center;
  margin-bottom: 2.5rem;
`;

const CategoryTitle = styled.h1`
  font-size: 2.8rem; 
  font-family: ${({ theme }) => theme.fonts.main};
  color: ${({ theme }) => theme.colors.text || '#fff'};
  text-transform: capitalize;
  margin-top: 0; /* Usunięto margines z Breadcrumbs, jeśli jest nad CategoryTitle */
`;

const Breadcrumbs = styled.div`
  font-size: 0.9rem;
  margin-bottom: 1rem; /* Zwiększono margines pod breadcrumbs */
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

const CategoriesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr)); 
  gap: 2rem; 
  padding: 0 2rem; 
  max-width: 1200px; 
  margin: 0 auto; 
`;

const NoItemsMessage = styled.p`
  text-align: center;
  font-size: 1.2rem;
  margin-top: 3rem;
`;

const AllBikesPage = ({ isAppReady }) => {
  const gsap = window.gsap;
  const pageWrapperRef = useRef(null);

  // console.log("[AllBikesPage.jsx] Component rendered. isAppReady:", isAppReady);
  // if (gsap && gsap.plugins) {
  //   console.log("[AllBikesPage.jsx] window.gsap.plugins.css available:", !!gsap.plugins.css);
  // }

  const categories = useMemo(() => {
    if (typeof getUniqueCategories === 'function') {
      return getUniqueCategories();
    }
    console.warn("[AllBikesPage.jsx] getUniqueCategories is not available or not a function.");
    return [];
  }, []);

  useEffect(() => {
    if (!gsap) { 
      console.error("[AllBikesPage.jsx] window.gsap not available for animation!");
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
          delay: 0.1 // Krótszy delay dla stron podrzędnych
        });
      }
    }
  }, [isAppReady, gsap]);

  if (typeof window !== "undefined" && !window.gsap && isAppReady) {
      return <div>GSAP not available for AllBikesPage.</div>;
  }
  if (!isAppReady && (typeof window !== "undefined" && !sessionStorage.getItem('loaderAnimationComplete'))) {
      return null; 
  }

  return (
    <>
      <Navbar animate={isAppReady} /> 
      <AllBikesPageWrapper ref={pageWrapperRef}>
        <MainContent>
          <PageHeader> {/* Użycie PageHeader */}
            <Breadcrumbs>
              <RouterLink to="/">Home</RouterLink>
              <span>&gt;</span>
              Bike Categories
            </Breadcrumbs>
            <CategoryTitle>Bike Categories</CategoryTitle>
          </PageHeader>
          
          {categories && categories.length > 0 ? (
            <CategoriesGrid>
              {categories.map(category => (
                <CategoryCard
                  key={category.name}
                  categoryName={category.name}
                  categoryImage={category.image}
                  categoryLink={`/bikes/${category.name.toLowerCase().replace(/\s+/g, '-')}`}
                />
              ))}
            </CategoriesGrid>
          ) : (
            <NoItemsMessage>No bike categories found.</NoItemsMessage>
          )}
        </MainContent>
        <Footer animate={isAppReady} /> 
      </AllBikesPageWrapper>
    </>
  );
};

export default AllBikesPage;