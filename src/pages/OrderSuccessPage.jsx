// src/pages/OrderSuccessPage.jsx
import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import Navbar from '../components/common/Navbar';
import Footer from '../components/common/Footer';

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
`;

const SuccessIcon = styled.div`
  font-size: 4rem;
  color: #28a745; /* Zielony kolor sukcesu */
  margin-bottom: 1.5rem;
`;

const Title = styled.h1`
  font-size: 2.5rem;
  margin-bottom: 1rem;
`;

const Message = styled.p`
  font-size: 1.1rem;
  margin-bottom: 0.5rem;
  max-width: 500px;
  line-height: 1.6;
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
`;

const OrderSuccessPage = () => {
  return (
    <PageWrapper>
      <Navbar animate={true} />
      <MainContent>
        <SuccessIcon>
          <i className="fas fa-check-circle"></i>
        </SuccessIcon>
        <Title>Thank You For Your Order!</Title>
        <Message>
          Your purchase was successful. We are now preparing your shipment.
        </Message>
     
        We have sent the exact shipment details to the provided email address.
        <Message>
          The package will be sent to the provided address. You can expect delivery within approximately **6-8 business days**.
        </Message>
        <StyledLink to="/">Back to Homepage</StyledLink>
      </MainContent>
      <Footer animate={true} />
    </PageWrapper>
  );
};

export default OrderSuccessPage;
