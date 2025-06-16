// src/components/categories/CategoryCard.jsx
import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const CardWrapper = styled(Link)` // Cały kafelek jest linkiem
  display: block;
  border-radius: 8px;
  overflow: hidden;
  position: relative;
  text-decoration: none;
  color: ${({ theme }) => theme.colors.text || '#fff'};
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  aspect-ratio: 16 / 10; // Możesz dostosować proporcje kafelka

  &:hover {
    transform: translateY(-5px) scale(1.02);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
  }

  &:hover img {
    transform: scale(1.1);
  }
`;

const CardImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
  transition: transform 0.4s ease;
`;

const CardOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(to top, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0.4) 50%, rgba(0,0,0,0) 100%);
  display: flex;
  flex-direction: column;
  justify-content: flex-end; /* Wyrównaj tekst do dołu */
  align-items: center; /* Wyśrodkuj tekst w poziomie */
  padding: 1.5rem;
  box-sizing: border-box;
`;

const CardTitle = styled.h2`
  font-size: clamp(1.5rem, 4vw, 2.2rem); /* Responsywny rozmiar */
  font-weight: 600;
  color: ${({ theme }) => theme.colors.white || '#fff'};
  text-align: center;
  margin: 0;
  text-shadow: 1px 1px 3px rgba(0,0,0,0.5);
`;

const CategoryCard = ({ categoryName, categoryImage, categoryLink }) => {
  return (
    <CardWrapper to={categoryLink}>
      <CardImage src={categoryImage} alt={categoryName} />
      <CardOverlay>
        <CardTitle>{categoryName}</CardTitle>
      </CardOverlay>
    </CardWrapper>
  );
};

export default CategoryCard;