// src/pages/TermsOfServicePage.jsx
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
  p, li {
    line-height: 1.7;
    margin-bottom: 1rem;
    color: ${({ theme }) => theme.colors.darkGrey || '#333'};
  }
  ul {
    padding-left: 20px;
  }
`;

const TermsOfServicePage = () => {
  return (
    <PageWrapper>
      <Navbar animate={true} />
      <MainContent>
        <Title>Terms of Service</Title>
        
        <ContentSection>
          <h2>1. Agreement to Terms</h2>
          <p>
            By accessing or using our services, you agree to be bound by these Terms of Service. If you disagree with any part of the terms, then you may not access the service. These terms apply to all visitors, users, and others who wish to access or use the service.
          </p>
        </ContentSection>

        <ContentSection>
          <h2>2. Use of Our Service</h2>
          <p>
            You agree to use our website and products for lawful purposes only. You are prohibited from using our site to engage in any activity that constitutes a criminal offense, gives rise to civil liability, or otherwise violates any law. We reserve the right to terminate your use of the service for violating any of the prohibited uses.
          </p>
        </ContentSection>

        <ContentSection>
          <h2>3. Intellectual Property</h2>
          <p>
            The service and its original content, features, and functionality are and will remain the exclusive property of RadAnOr Bikes and its licensors. Our trademarks and trade dress may not be used in connection with any product or service without the prior written consent of RadAnOr Bikes.
          </p>
        </ContentSection>

        <ContentSection>
          <h2>4. Limitation of Liability</h2>
          <p>
            In no event shall RadAnOr Bikes, nor its directors, employees, partners, agents, suppliers, or affiliates, be liable for any indirect, incidental, special, consequential or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses, resulting from your access to or use of or inability to access or use the service.
          </p>
        </ContentSection>

      </MainContent>
      <Footer animate={true} />
    </PageWrapper>
  );
};

export default TermsOfServicePage;