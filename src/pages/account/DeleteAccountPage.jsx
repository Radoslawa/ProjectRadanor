// src/pages/account/DeleteAccountPage.jsx
import React, { useState } from 'react';
import styled, { keyframes } from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthContext';
import { useCart } from '../../contexts/CartContext';

const SectionContent = styled.div`
  h3 {
    font-size: 1.5rem;
    margin-top: 0;
    color: ${({ theme }) => theme.colors.attention || 'red'};
  }
  p {
    line-height: 1.7;
    margin-bottom: 1.5rem;
  }
`;

const DeleteButton = styled.button`
  background-color: ${({ theme }) => theme.colors.attention || 'red'};
  color: white;
  border: none;
  padding: 0.8em 1.5em;
  border-radius: 5px;
  cursor: pointer;
  font-weight: 500;
  transition: background-color 0.2s ease;
  
  &:hover {
    background-color: darkred;
  }
`;

const fadeIn = keyframes`from { opacity: 0; } to { opacity: 1; }`;
const ModalOverlay = styled.div`
  position: fixed; top: 0; left: 0; width: 100%; height: 100%;
  background-color: rgba(0, 0, 0, 0.7); z-index: 1050;
  display: flex; justify-content: center; align-items: center;
  animation: ${fadeIn} 0.3s ease-out;
`;
const ModalContent = styled.div`
  background-color: #fff; padding: 2rem 3rem; border-radius: 8px;
  text-align: center; max-width: 500px; width: 90%;
  h3 { font-size: 1.5rem; margin-top: 0; }
  p { margin: 1rem 0; line-height: 1.6; }
`;
const ModalActions = styled.div`
  display: flex; justify-content: center; gap: 1rem; margin-top: 1.5rem;
`;
const ModalButton = styled.button`
  padding: 0.7em 1.5em; border-radius: 5px; border: 1px solid #ccc;
  cursor: pointer; font-weight: 500;
  &.confirm {
    background-color: ${({ theme }) => theme.colors.attention || 'red'};
    color: white; border-color: transparent;
  }
`;

const DeleteAccountPage = () => {
  const { deleteAccount } = useAuth();
  const { clearCart } = useCart();
  const navigate = useNavigate();
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [error, setError] = useState('');

  const handleConfirmDelete = async () => {
    try {
      await deleteAccount();
      clearCart(); 
      navigate('/', { state: { message: 'Your account has been successfully deleted.' } });
    } catch (err) {
      console.error("Failed to delete account:", err);
      setError("Failed to delete account. You may need to log in again to perform this action.");
      setIsDeleteModalOpen(false);
    }
  };

  return (
    <>
      <SectionContent>
        <h3>Delete Account</h3>
        <p>This action is permanent and cannot be undone. All your personal data and order history will be removed.</p>
        <DeleteButton onClick={() => setIsDeleteModalOpen(true)}>Delete My Account</DeleteButton>
        {error && <p style={{color: 'red', marginTop: '1rem'}}>{error}</p>}
      </SectionContent>
      
      {isDeleteModalOpen && (
        <ModalOverlay onClick={() => setIsDeleteModalOpen(false)}>
          <ModalContent onClick={(e) => e.stopPropagation()}>
            <h3>Are you sure you want to delete your account?</h3>
            <p>You will lose all your data and your account. </p>
            <ModalActions>
              <ModalButton onClick={() => setIsDeleteModalOpen(false)}>Cancel</ModalButton>
              <ModalButton className="confirm" onClick={handleConfirmDelete}>Confirm Deletion</ModalButton>
            </ModalActions>
          </ModalContent>
        </ModalOverlay>
      )}
    </>
  );
};

export default DeleteAccountPage;