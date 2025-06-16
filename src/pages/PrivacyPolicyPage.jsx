// src/pages/PrivacyPolicyPage.jsx
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
  margin-bottom: 2rem;
  h2 {
    font-size: 1.8rem;
    margin-bottom: 1rem;
    padding-bottom: 0.5rem;
    border-bottom: 1px solid #ddd;
  }
  p {
    line-height: 1.7;
    margin-bottom: 1rem;
    color: ${({ theme }) => theme.colors.darkGrey || '#333'};
  }
`;

const PrivacyPolicyPage = () => {
  return (
    <PageWrapper>
      <Navbar animate={true} />
      <MainContent>
        <Title>Privacy Policy</Title>
        
        <ContentSection>
          <h2>1. Information We Collect</h2>
          <p>
            We collect information you provide directly to us when you create an account, place an order, or communicate with us. This may include your name, email address, shipping address, and payment information. We also collect some information automatically, such as your IP address and browsing behavior, to improve our services.
          </p>
        </ContentSection>

        <ContentSection>
          <h2>2. How We Use Your Information</h2>
          <p>
            Your information is used to process your orders, communicate with you about your purchases, and personalize your shopping experience. We may also use your information for marketing purposes, but only with your explicit consent. We are committed to not sharing your personal data with third parties, except as necessary to fulfill your order (e.g., with shipping carriers).
          </p>
        </ContentSection>

        <ContentSection>
          <h2>3. Data Security</h2>
          <p>
            We implement a variety of security measures to maintain the safety of your personal information. Your personal information is contained behind secured networks and is only accessible by a limited number of persons who have special access rights to such systems, and are required to keep the information confidential.
          </p>
        </ContentSection>

        <ContentSection>
          <h2>4. Your Rights</h2>
          <p>
            You have the right to access, correct, or delete your personal information at any time. If you wish to exercise these rights, please contact us at privacy@radanor.bike.
          </p>
        </ContentSection>

      </MainContent>
      <Footer animate={true} />
    </PageWrapper>
  );
};

export default PrivacyPolicyPage;