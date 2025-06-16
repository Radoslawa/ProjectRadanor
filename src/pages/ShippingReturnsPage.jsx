// src/pages/ShippingReturnsPage.jsx
import React from 'react';
import styled from 'styled-components';

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
  width: 100%;
  max-width: 900px;
  margin: 0 auto;
  padding: 120px 2rem 4rem;
  color: ${({ theme }) => theme.colors.black || '#000'};
`;

const Title = styled.h1`
  font-size: 2.5rem;
  margin-bottom: 2.5rem;
  text-align: center;
`;

const ContentSection = styled.section`
  margin-bottom: 3rem;
  h2 {
    font-size: 1.8rem;
    margin-bottom: 1rem;
    padding-bottom: 0.5rem;
    border-bottom: 1px solid #ddd;
  }
  p, li {
    line-height: 1.7;
    margin-bottom: 1rem;
    color: ${({ theme }) => theme.colors.darkGrey || '#333'};
  }
  ul {
    padding-left: 20px;
  }
`;

const ShippingReturnsPage = () => {
  return (
    <PageWrapper>
      <Navbar animate={true} />
      <MainContent>
        <Title>Shipping & Returns</Title>
        
        <ContentSection>
          <h2>Shipping Policy</h2>
          <p>
            We are excited to get your new bike to you! We offer complimentary standard shipping on all bike orders across Europe.
          </p>
          <ul>
            <li>
              <strong>Processing Time:</strong> Orders are typically processed and packed within 1-2 business days.
            </li>
            <li>
              <strong>Shipping Time:</strong> Standard shipping usually takes 3-5 business days to arrive after dispatch.
            </li>
            <li>
              <strong>Tracking:</strong> You will receive a tracking number via email as soon as your order has been shipped, allowing you to follow your package's journey to your doorstep.
            </li>
          </ul>
        </ContentSection>

        <ContentSection>
          <h2>Return Policy</h2>
          <p>
            We want you to be completely satisfied with your purchase. If for any reason you are not happy with your bike, we offer a 30-day return policy.
          </p>
          <ul>
            <li>
              <strong>Eligibility:</strong> To be eligible for a return, your bike must be in the same unused condition that you received it, with all original parts, accessories, and packaging.
            </li>
            <li>
              <strong>Process:</strong> To initiate a return, please contact our customer service team at contact@radanor.bike with your order number. We will provide you with instructions on how to proceed.
            </li>
            <li>
              <strong>Refunds:</strong> Once your return is received and inspected, we will process your refund. The credit will automatically be applied to your original method of payment within 7-10 business days.
            </li>
          </ul>
        </ContentSection>

      </MainContent>
      <Footer animate={true} />
    </PageWrapper>
  );
};

export default ShippingReturnsPage;