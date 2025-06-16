// src/pages/SizeGuidePage.jsx
import React from 'react';
import styled from 'styled-components';

import Navbar from '../components/common/Navbar';
import Footer from '../components/common/Footer';

import sizeChartImage from '../assets/images/size-guide6.webp'; 
import sizeTableImage from '../assets/images/size-guide.png'; 

// --- Styled Components ---

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
  margin-bottom: 1.5rem;
  text-align: center;
`;

const Subtitle = styled.p`
  font-size: 1.1rem;
  text-align: center;
  max-width: 600px;
  margin: 0 auto 3rem auto;
  line-height: 1.6;
  color: ${({ theme }) => theme.colors.darkGrey || '#555'};
`;

const ContentSection = styled.section`
  margin-bottom: 3rem;
  background: ${({ theme }) => theme.colors.white || '#fff'};
  padding: 2rem;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.08);

  h2 {
    font-size: 1.8rem;
    margin-top: 0;
    margin-bottom: 1rem;
  }
  p, li {
    line-height: 1.7;
    margin-bottom: 1rem;
  }
  ul {
    padding-left: 20px;
    list-style-position: outside;
  }
`;

const ChartImageWrapper = styled.div`
  width: 100%;
  padding: 2rem;
  background-color: ${({ theme }) => theme.colors.white || '#fff'};
  border-radius: 8px;
  box-shadow: 0 4px 12px rgba(0,0,0,0.1);
  margin-bottom: 3rem;
  
  img {
    width: 100%;
    height: auto;
    display: block;
  }
`;

const SizeGuidePage = () => {
  return (
    <PageWrapper>
      <Navbar animate={true} />
      <MainContent>
        <Title>Size guide</Title>
        <Subtitle>
          In this guide you can find all the information you need to get your bearings with Radanor sizes.
        </Subtitle>

        <ChartImageWrapper>
          <img src={sizeChartImage} alt="Sizing Chart: Height vs Inner Leg Length" />
        </ChartImageWrapper>

        <ChartImageWrapper>
          <img src={sizeTableImage} alt="Sizing Table with measurements" />
        </ChartImageWrapper>

        <ContentSection>
          <h2>How We Measure</h2>
          <p>
            It's important to know that RadanOr measures its bikes 'Italian style', which means taking the measurement on the seat tube, starting from the centre of the bottom bracket to the seatpost node.
          </p>
        </ContentSection>

        <ContentSection>
          <h2>Model Indications</h2>
          <p>
            For detailed geometry data for each model, please refer to the individual product page. The charts above serve as a general guide for our main categories:
          </p>
          <ul>
            <li>Gravel</li>
            <li>Racing</li>
            <li>City</li>
            <li>MTB</li>
          </ul>
        </ContentSection>

      </MainContent>
      <Footer animate={true} />
    </PageWrapper>
  );
};

export default SizeGuidePage;