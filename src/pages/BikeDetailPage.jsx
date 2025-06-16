// src/pages/BikeDetailPage.jsx
import React, { useEffect, useRef, useState, useMemo } from 'react';
import { useParams, Link as RouterLink } from 'react-router-dom';
import styled, { keyframes } from 'styled-components';

import Navbar from '../components/common/Navbar';
import Footer from '../components/common/Footer';
import { findBikeById } from '../data/allBikesData.js'; 
import { useCart } from '../contexts/CartContext.jsx';

// --- Styled Components ---
const DetailPageWrapperStyled = styled.div`
  width: 100%;
  min-height: 100vh;
  background-color: ${({ theme }) => theme.colors.grey || '#f0f0f0'}; 
  color: ${({ theme }) => theme.colors.black || '#000'};
  opacity: 0;
  visibility: hidden;
  will-change: opacity;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
`;

const MainContentDetail = styled.main`
  flex-grow: 1;
  padding-top: 100px;
  padding-bottom: 3rem;
`;

const ProductLayoutStyled = styled.div`
  max-width: 1200px; 
  margin: 2rem auto;
  padding: 0 1rem;
  display: grid; 
  grid-template-columns: minmax(0, 1.5fr) minmax(0, 1fr);
  grid-template-areas: "mainimage info" "gallery   info" "specs     specs";
  gap: 2rem 3rem;
  @media (max-width: ${({ theme }) => theme.breakpoints.laptopS || '900px'}) {
    grid-template-columns: 1fr;
    grid-template-areas: "mainimage" "gallery" "info" "specs";
    gap: 1.5rem;
  }
`;

const MainImageContainerStyled = styled.div`
  grid-area: mainimage; 
  width: 100%;
  border-radius: 8px; 
  overflow: hidden;
  box-shadow: 0 4px 12px rgba(0,0,0,0.08);
  cursor: zoom-in;
  background-color: #fff;
  
  img {
    width: 100%; 
    height: 100%; /* Zmieniono z auto */
    display: block; 
    aspect-ratio: 4/3; 
    object-fit: cover; /* POPRAWKA: Powrót do 'cover' */
    transition: opacity 0.3s ease-in-out; 
  }
`;

const GalleryContainerStyled = styled.div`
  grid-area: gallery; 
  display: flex; 
  flex-wrap: wrap; 
  gap: 1rem;
  
  img {
    width: 100px; 
    height: 75px; 
    object-fit: cover; /* POPRAWKA: Powrót do 'cover' */
    border-radius: 6px;
    cursor: pointer; 
    border: 3px solid transparent;
    transition: all 0.2s ease;
    background-color: #fff;

    &:hover { 
      border-color: ${({ theme }) => theme.colors.primary || '#0a0a0a'}; 
      transform: scale(1.05); 
    }
    &.active-thumbnail { 
      border-color: ${({ theme }) => theme.colors.primary || '#0a0a0a'}; 
      box-shadow: 0 0 10px rgba(0,0,0,0.2); 
      transform: scale(1.05); 
    }
  }
`;

const InfoContainerStyled = styled.div` grid-area: info; display: flex; flex-direction: column; `;
const BikeTypeStyledP = styled.p`
  font-size: 0.9rem; color: ${({ theme }) => theme.colors.darkGrey || '#555'};
  text-transform: uppercase; letter-spacing: 0.5px; margin-bottom: 0.25rem;
`;
const BikeNameStyledH1 = styled.h1`
  font-size: clamp(1.8rem, 4vw, 2.5rem); 
  font-family: ${({ theme }) => theme.fonts.main};
  font-weight: 600;
  color: ${({ theme }) => theme.colors.black || '#222'};
  margin-bottom: 0.75rem;
  line-height: 1.2; text-align: left;
`;
const BikePriceStyledP = styled.p`
  font-size: clamp(1.5rem, 3vw, 2rem); 
  font-weight: 700;
  font-family: ${({ theme }) => theme.fonts.main};
  color: ${({ theme }) => theme.colors.primary || '#0a0a0a'}; 
  margin-bottom: 1.5rem;
`;
const BikeDescriptionStyledP = styled.p`
  font-size: 1rem; 
  font-family: ${({ theme }) => theme.fonts.main};
  line-height: 1.7; 
  color: #333; 
  margin-bottom: 1.5rem;
`;
const FeaturesSectionStyled = styled.div`
  margin-bottom: 1.5rem;
  h3 { font-size: 1.1rem; 
  font-weight: 600; 
  margin-bottom: 0.75rem;
       color: ${({ theme }) => theme.colors.black || '#222'}; 
       border-bottom: 1px solid ${({ theme }) => theme.colors.grey || '#ddd'};
       padding-bottom: 0.25rem;  
       text-align: left; }
  ul { list-style: none; 
  padding-left: 0;
    li { font-size: 0.95rem; 
    margin-bottom: 0.5rem; 
    color: ${({ theme }) => theme.colors.darkGrey || '#555'};
         position: relative; 
         padding-left: 20px;
      &::before { content: '✓'; 
      color: ${({ theme }) => theme.colors.primary || '#0a0a0a'};
                   position: absolute; 
                   left: 0; 
                   font-weight: bold; }
    }
  }
`;
const SizeSelectorWrapper = styled.div`
  margin-top: 1.5rem; margin-bottom: 1rem;
  label { display: block; font-size: 0.9rem; font-weight: 600; margin-bottom: 0.5rem; color: ${({ theme }) => theme.colors.darkGrey || '#555'}; }
  div { display: flex; gap: 0.5rem; flex-wrap: wrap; }
`;
const SizeButton = styled.button`
  padding: 0.5em 1em; font-size: 0.9rem; font-weight: 500;
  border: 1px solid ${({ theme, $isActive }) => $isActive ? (theme.colors.primary || '#0a0a0a') : (theme.colors.grey || '#ccc')};
  background-color: ${({ theme, $isActive }) => $isActive ? (theme.colors.primary || '#0a0a0a') : (theme.colors.white || '#fff')};
  color: ${({ theme, $isActive }) => $isActive ? (theme.colors.white || '#fff') : (theme.colors.black || '#000')};
  border-radius: 4px; cursor: pointer; transition: all 0.2s ease;
  &:hover:not(:disabled) {
    border-color: ${({ theme }) => theme.colors.primary || '#0a0a0a'};
    background-color: ${({ theme, $isActive }) => $isActive ? (theme.colors.primary || '#0a0a0a') : (theme.colors.accent || '#f0f0f0')};
  }
  &:disabled { cursor: not-allowed; opacity: 0.7; }
`;
const AddToCartButtonStyled = styled.button`
  background-color: ${({ theme }) => theme.colors.primary || '#0a0a0a'};
  color: ${({ theme }) => theme.colors.white || '#fff'}; border: none;
  padding: 0.9em 1.8em; font-size: 1rem; font-weight: 500;
  text-transform: uppercase; border-radius: 25px; cursor: pointer;
  transition: background-color 0.3s ease, transform 0.2s ease;
  margin-top: 1.5rem; margin-bottom: 1.5rem; align-self: flex-start;
  &:hover { background-color: ${({ theme }) => theme.colors.secondary || '#303030'}; transform: translateY(-2px); }
`;
const SpecificationsSectionStyled = styled.div`
  grid-area: specs; padding: 2rem 0;
  border-top: 1px solid ${({ theme }) => theme.colors.grey || '#ddd'}; margin-top: 1rem;
  h3 { font-size: 1.8rem; color: ${({ theme }) => theme.colors.black || '#222'};
       margin-bottom: 1.5rem; text-align: left; padding-bottom: 0.5rem;
       border-bottom: 2px solid ${({ theme }) => theme.colors.primary || '#0a0a0a'};
       display: inline-block; }
`;
const SpecGroupStyled = styled.div`
  margin-bottom: 2rem;
  h4 { 
    font-size: 1.2rem; font-weight: 600;
    color: ${({ theme }) => theme.colors.primary || '#0a0a0a'};
    margin-bottom: 1rem; padding-bottom: 0.25rem;
    border-bottom: 1px dashed ${({ theme }) => theme.colors.grey || '#ccc'};
  }
`;
const SpecTableStyled = styled.table`
  width: 100%; border-collapse: collapse; font-size: 0.95rem;
  th, td { 
    text-align: left; padding: 0.8em 0.5em; 
    border-bottom: 1px solid ${({ theme }) => theme.colors.grey || '#eee'};
    vertical-align: top; 
  }
  tr:last-child th, tr:last-child td { border-bottom: none; }
  th { color: ${({ theme }) => theme.colors.darkGrey || '#555'}; font-weight: 600; width: 35%; }
  td { color: ${({ theme }) => theme.colors.black || '#333'}; }
`;

// --- Nowe, Uproszczone Style dla Lightboxa ---
const fadeIn = keyframes`from { opacity: 0; } to { opacity: 1; }`;
const scaleIn = keyframes`from { transform: scale(0.95); } to { transform: scale(1); }`;

const LightboxOverlay = styled.div`
  position: fixed; top: 0; left: 0; width: 100%; height: 100%;
  background-color: rgba(0, 0, 0, 0.85);
  z-index: 2000;
  display: flex; justify-content: center; align-items: center;
  animation: ${fadeIn} 0.3s ease-out;
`;

const LightboxContent = styled.div`
  position: relative; /* Potrzebne do pozycjonowania przycisku zamknięcia */
  max-width: 90vw;
  max-height: 90vh;
  animation: ${scaleIn} 0.3s ease-out;
  
  img {
    display: block;
    max-width: 100%;
    max-height: 100%;
    object-fit: contain;
    border-radius: 8px;
    box-shadow: 0 10px 30px rgba(0,0,0,0.3);
  }
`;

const CloseButton = styled.button`
  position: absolute;
  top: -15px;
  right: -15px;
  width: 40px;
  height: 40px;
  background: white;
  border: none;
  border-radius: 50%;
  font-size: 1.5rem;
  font-weight: bold;
  color: black;
  cursor: pointer;
  z-index: 10;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 2px 10px rgba(0,0,0,0.3);
  transition: transform 0.2s ease;
  
  &:hover {
    transform: scale(1.1);
  }
`;

const BikeDetailPage = ({ isAppReady }) => {
  const gsap = window.gsap;
  const pageWrapperRef = useRef(null);
  const mainImageRef = useRef(null);
  const { bikeId } = useParams(); 
  const { addItemToCart } = useCart();
  
  const bike = useMemo(() => findBikeById(bikeId), [bikeId]);

  const [currentMainImage, setCurrentMainImage] = useState(bike ? bike.mainImage : null);
  const [selectedSize, setSelectedSize] = useState(null);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);

  useEffect(() => {
    if (bike) {
      setCurrentMainImage(bike.mainImage || null);
      if (bike.availableSizes && bike.availableSizes.length > 0) {
        if (!selectedSize || !bike.availableSizes.includes(selectedSize)) {
            setSelectedSize(bike.availableSizes[0]);
        }
      } else { setSelectedSize(null); }
    } else {
      setCurrentMainImage(null);
      setSelectedSize(null);
    }
  }, [bike, selectedSize]);

  const handleThumbnailClick = (newImageSrc) => {
    if (gsap && mainImageRef.current && currentMainImage !== newImageSrc) {
      const imgElement = mainImageRef.current; 
      gsap.to(imgElement, { 
        opacity: 0, duration: 0.15, 
        onComplete: () => {
          setCurrentMainImage(newImageSrc);
          gsap.to(imgElement, { opacity: 1, duration: 0.15, delay: 0.05 });
        }
      });
    } else if (currentMainImage !== newImageSrc) {
        setCurrentMainImage(newImageSrc);
    }
  };

  useEffect(() => {
    if (!gsap) { return; }
    const wrapper = pageWrapperRef.current;
    if (wrapper) {
      gsap.set(wrapper, { opacity: 0, visibility: 'hidden' }); 
      if (isAppReady) {
        gsap.to(wrapper, { opacity: 1, visibility: 'visible', duration: 0.5, delay: 0.1 });
      }
    }
    window.scrollTo(0, 0);
  }, [isAppReady, gsap, bikeId]); 

  const handleAddToCart = () => {
    if (bike && bike.availableSizes && bike.availableSizes.length > 0 && !selectedSize) {
        alert("Please select a size before adding to cart.");
      return;
    }
    if (bike) {
        addItemToCart(bike, selectedSize);
    }
  };
  
  if (!bike) {
    return (
      <DetailPageWrapperStyled ref={pageWrapperRef} style={{opacity: 1, visibility: 'visible'}}>
        <Navbar animate={isAppReady} variant="light" />
        <MainContentDetail style={{textAlign: 'center', paddingTop: '150px'}}>
          <BikeNameStyledH1>Bike Not Found</BikeNameStyledH1>
          <p>Sorry, we couldn't find a bike with ID: {bikeId}</p>
          <RouterLink to="/all-bikes" style={{marginTop: '20px', display:'inline-block', color: 'blue'}}>Back to All Bike Categories</RouterLink>
        </MainContentDetail>
        <Footer animate={isAppReady} />
      </DetailPageWrapperStyled>
    );
  }

  return (
    <DetailPageWrapperStyled ref={pageWrapperRef}>
      <Navbar animate={isAppReady} variant="light"/>
      <MainContentDetail>
        <ProductLayoutStyled>
            <MainImageContainerStyled onClick={() => setIsLightboxOpen(true)}>
              {currentMainImage && <img ref={mainImageRef} src={currentMainImage} alt={bike.name} />}
            </MainImageContainerStyled>
            <GalleryContainerStyled>
              {bike.galleryImages?.map((imgSrc, index) => (
                <img key={index} src={imgSrc} alt={`${bike.name} - gallery image ${index + 1}`} onClick={() => handleThumbnailClick(imgSrc)} className={currentMainImage === imgSrc ? 'active-thumbnail' : ''} />
              ))}
            </GalleryContainerStyled>
            <InfoContainerStyled>
              <BikeTypeStyledP>{bike.category}</BikeTypeStyledP>
              <BikeNameStyledH1>{bike.name}</BikeNameStyledH1>
              <BikePriceStyledP>{bike.price} {bike.currency}</BikePriceStyledP>
              <BikeDescriptionStyledP>{bike.description}</BikeDescriptionStyledP>
              {bike.features && (
                <FeaturesSectionStyled>
                  <h3>Key Features</h3>
                  <ul>{bike.features.map((feature, index) => ( <li key={index}>{feature}</li> ))}</ul>
                </FeaturesSectionStyled>
              )}
              {bike.availableSizes && (
                <SizeSelectorWrapper>
                  <label htmlFor="size-selector-buttons">Select Size:</label>
                  <div id="size-selector-buttons">
                    {bike.availableSizes.map(size => (
                      <SizeButton key={size} $isActive={selectedSize === size} onClick={() => setSelectedSize(size)}>{size}</SizeButton>
                    ))}
                  </div>
                </SizeSelectorWrapper>
              )}
              <AddToCartButtonStyled onClick={handleAddToCart} disabled={!!(bike.availableSizes && bike.availableSizes.length > 0 && !selectedSize)}>
                Add to Cart
              </AddToCartButtonStyled>
            </InfoContainerStyled>
            {bike.specifications && (
              <SpecificationsSectionStyled>
                <h3>Full Specifications</h3>
                {bike.specifications.map((group, groupIndex) => (
                  <SpecGroupStyled key={groupIndex}>
                    <h4>{group.groupName}</h4>
                    <SpecTableStyled><tbody>
                        {group.items.map((spec, specIndex) => (
                          <tr key={specIndex}><th>{spec.label}</th><td>{spec.value}</td></tr>
                        ))}
                    </tbody></SpecTableStyled>
                  </SpecGroupStyled>
                ))}
              </SpecificationsSectionStyled>
            )}
          </ProductLayoutStyled>
      </MainContentDetail>
      <Footer animate={isAppReady} />

      {isLightboxOpen && (
        <LightboxOverlay onClick={() => setIsLightboxOpen(false)}>
          <LightboxContent onClick={(e) => e.stopPropagation()}>
            <CloseButton onClick={() => setIsLightboxOpen(false)}>&times;</CloseButton>
            <img src={currentMainImage} alt="Enlarged bike view" />
          </LightboxContent>
        </LightboxOverlay>
      )}
    </DetailPageWrapperStyled>
  );
};
export default BikeDetailPage;
