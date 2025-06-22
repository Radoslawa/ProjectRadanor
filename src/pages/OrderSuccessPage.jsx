// src/pages/OrderSuccessPage.jsx
import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next'; 

import Navbar from '../components/common/Navbar';
import Footer from '../components/common/Footer';

// --- Styled Components  ---

const PageWrapper = styled.div`
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  background-color: ${({ theme }) => theme.colors.grey || '#f0f0f0'};
`;

const MainContent = styled.main`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 120px 2rem 4rem;
  text-align: center;
  color: ${({ theme }) => theme.colors.black || '#000'};

  @media (max-width: ${({ theme }) => theme.breakpoints.tabletS || '768px'}) {
    padding: 100px 1rem 2rem; 
  }
`;

const SuccessIcon = styled.div`
  font-size: 4rem;
  color: #28a745; 
  margin-bottom: 1.5rem;

  @media (max-width: ${({ theme }) => theme.breakpoints.tabletS || '768px'}) {
    font-size: 3rem;
  }
`;

const Title = styled.h1`
  font-size: 2.5rem;
  margin-bottom: 1rem;

  @media (max-width: ${({ theme }) => theme.breakpoints.tabletS || '768px'}) {
    font-size: 2rem; 
  }
`;

const Message = styled.p`
  font-size: 1.1rem;
  margin-bottom: 0.5rem;
  max-width: 500px;
  line-height: 1.6;

  @media (max-width: ${({ theme }) => theme.breakpoints.tabletS || '768px'}) {
    font-size: 1rem; 
    max-width: 90%; 
  }
`;

const StyledLink = styled(Link)`
  display: inline-block;
  margin-top: 2rem;
  padding: 0.8em 2em;
  background-color: ${({ theme }) => theme.colors.primary || '#0a0a0a'};
  color: ${({ theme }) => theme.colors.white || '#fff'};
  text-decoration: none;
  border-radius: 25px;
  font-weight: 500;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: ${({ theme }) => theme.colors.secondary || '#303030'};
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.tabletS || '768px'}) {
    padding: 0.7em 1.5em; 
    font-size: 0.95rem;
  }
`;

// --- Komponent ---

const OrderSuccessPage = () => {
  const { t } = useTranslation();

  return (
    <PageWrapper>
      <Navbar animate={true} variant="light" />
      <MainContent>
        <SuccessIcon>
          <i className="fas fa-check-circle"></i>
        </SuccessIcon>
        <Title>{t('order_success_title', 'Thank you for your order!')}</Title>
        <Message>{t('order_success_subtitle', 'Your order has been placed successfully.')}</Message>
        <Message>{t('order_success_message', 'You will receive an email confirmation shortly.')}</Message>
        <StyledLink to="/account/orders">{t('order_success_track_button', 'Track Your Order')}</StyledLink>
        <StyledLink to="/" style={{marginLeft: '1rem', backgroundColor: '#6c757d'}}>{t('order_success_home_button', 'Back to Homepage')}</StyledLink>
      </MainContent>
      <Footer animate={true} />
    </PageWrapper>
  );
};

export default OrderSuccessPage;
