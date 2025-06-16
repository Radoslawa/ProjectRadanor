// src/pages/account/ProfileDetailsPage.jsx
import React from 'react';
import styled from 'styled-components';
import { useAuth } from '../../contexts/AuthContext';

const SectionContent = styled.div`
  h3 { font-size: 1.5rem; margin-top: 0; }
`;
const InfoRow = styled.p`
  font-size: 1.1rem;
  margin: 1rem 0;
  strong { display: inline-block; width: 120px; color: #555; }
`;

const ProfileDetailsPage = () => {
  const { currentUser } = useAuth();
  return (
    <SectionContent>
      <h3>Personal Details</h3>
      {currentUser && (
        <>
          <InfoRow><strong>Display Name:</strong> {currentUser.displayName || 'Not set'}</InfoRow>
          <InfoRow><strong>Email:</strong> {currentUser.email}</InfoRow>
        </>
      )}
    </SectionContent>
  );
};
export default ProfileDetailsPage;