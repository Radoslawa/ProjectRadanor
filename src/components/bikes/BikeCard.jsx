// src/components/bikes/BikeCard.jsx
import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const CardWrapper = styled(Link)` 
  display: block;
  border: 1px solid ${({ theme }) => theme.colors.grey || '#ddd'};
  border-radius: 8px;
  overflow: hidden;
  background-color: ${({ theme }) => theme.colors.white || '#fff'};
  color: ${({ theme }) => theme.colors.black || '#000'};
  display: flex;
  flex-direction: column;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  text-decoration: none; 

  &:hover {
    transform: translateY(-5px) scale(1.01);
    box-shadow: 0 6px 16px rgba(0, 0, 0, 0.12);
  }

  &:hover img.card-image-hover {
    transform: scale(1.05);
  }
`;

const CardImage = styled.img`
  width: 100%;
  height: 220px; 
  object-fit: cover;
  object-position: center center; /* Możesz nadal eksperymentować z tą wartością */
  display: block;
  transition: transform 0.4s ease;
`;

const CardContent = styled.div`
  padding: 1rem 1.25rem;
  display: flex;
  flex-direction: column;
  flex-grow: 1; 
`;

const CardTitle = styled.h3`
  font-size: 1.15rem;
  font-weight: 600;
  margin-bottom: 0.5rem;
  color: ${({ theme }) => theme.colors.black || '#222'};
`;

const CardDescription = styled.p`
  font-size: 0.85rem;
  color: ${({ theme }) => theme.colors.darkGrey || '#555'};
  margin-bottom: 1rem;
  flex-grow: 1; 
  line-height: 1.5;
  display: -webkit-box;
  -webkit-line-clamp: 3; 
  -webkit-box-orient: vertical;  
  overflow: hidden;
  text-overflow: ellipsis;
`;

const DiscoverButtonStyled = styled.div` 
  display: inline-block;
  padding: 0.6em 1.2em;
  background-color: ${({ theme }) => theme.colors.primary || '#0a0a0a'};
  color: ${({ theme }) => theme.colors.white || '#fff'};
  border-radius: 20px;
  text-decoration: none;
  text-align: center;
  font-weight: 500;
  font-size: 0.9rem;
  transition: background-color 0.3s ease;
  margin-top: auto; 
  align-self: center;
`;

// Usunięto 'category' z listy propsów
const BikeCard = ({ image, title, description, id, altText }) => { 
  const detailLink = `/bike/${id}`; 

  return (
    <CardWrapper to={detailLink}> 
      <CardImage src={image} alt={altText || title} className="card-image-hover" />
      <CardContent>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description || 'More details coming soon...'}</CardDescription>
        <DiscoverButtonStyled>
          Discover more
        </DiscoverButtonStyled>
      </CardContent>
    </CardWrapper>
  );
};

export default BikeCard;