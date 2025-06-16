// src/pages/account/ReturnsPage.jsx
import React from 'react';
import styled from 'styled-components';

const SectionContent = styled.div`
  h3 { font-size: 1.5rem; margin-top: 0; }
  p { line-height: 1.7; }
`;

const ReturnsPage = () => {
  return (
    <SectionContent>
      <h3>My Returns</h3>
      <p>
        If you wish to return an item, please contact our customer support at contact@radanor.bike with your order number.
      </p>
      <p>
        Please note that returns are subject to our general Return Policy. You can find more details on our <a href="/shipping-returns">Shipping & Returns</a> page.
      </p>
    </SectionContent>
  );
};
export default ReturnsPage;