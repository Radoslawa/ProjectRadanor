// src/pages/account/AddressPage.jsx
import React, { useState, useEffect, useCallback } from 'react';
import styled from 'styled-components';
import { useAuth } from '../../contexts/AuthContext';
import { db } from '../../firebase';
import { doc, getDoc, setDoc } from 'firebase/firestore';

const SectionContent = styled.div`
  h3 { font-size: 1.5rem; margin-top: 0; }
`;
const Form = styled.form` 
  display: flex; 
  flex-direction: column; 
  gap: 1rem; 
  max-width: 500px; 
  margin-top: 1.5rem;
`;
const InputGroup = styled.div` 
  display: flex; 
  flex-direction: column; 
`;
const Label = styled.label` 
  font-size: 0.9rem; 
  margin-bottom: 0.4rem; 
  color: #555; 
`;
const Input = styled.input`
  padding: 0.8em 1em; 
  border: 1px solid #ccc; 
  border-radius: 4px;
  font-size: 1rem; 
  font-family: inherit;
  &:focus { 
    outline: none; 
    border-color: #0a0a0a; 
  }
`;
const SubmitButton = styled.button`
  background-color: #0a0a0a; 
  color: #fff; 
  border: none;
  padding: 0.8em 1.5em; 
  font-size: 0.9rem; 
  font-weight: 500;
  border-radius: 5px; 
  cursor: pointer; 
  transition: all 0.3s;
  margin-top: 1rem; 
  align-self: flex-start;
  &:hover:not(:disabled) { 
    background-color: #303030; 
  }
  &:disabled {
    background-color: #ccc;
    cursor: not-allowed;
  }
`;
const Message = styled.p`
  margin-top: 1rem;
  font-weight: 500;
  font-size: 0.9rem;
  color: ${({ type }) => (type === 'success' ? '#28a745' : '#a00')};
`;

const AddressPage = () => {
  const { currentUser } = useAuth();
  const [address, setAddress] = useState({ street: '', city: '', postalCode: '', country: '' });
  const [loading, setLoading] = useState(true);
  const [message, setMessage] = useState('');

  const fetchUserAddress = useCallback(async () => {
    if (currentUser) {
      const userDocRef = doc(db, "users", currentUser.uid);
      try {
        const docSnap = await getDoc(userDocRef);
        if (docSnap.exists()) {
          const userData = docSnap.data();
          setAddress({
            street: userData.street || '',
            city: userData.city || '',
            postalCode: userData.postalCode || '',
            country: userData.country || '',
          });
        }
      } catch (err) { console.error("Error fetching user data:", err); }
      setLoading(false);
    }
  }, [currentUser]);

  useEffect(() => { fetchUserAddress(); }, [fetchUserAddress]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setAddress(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!currentUser) {
      setMessage("You must be logged in to save your address.");
      return;
    }
    
    setLoading(true);
    setMessage('');

    const userDocRef = doc(db, "users", currentUser.uid);
    try {
      // Użyj setDoc z opcją merge, aby zaktualizować lub dodać pola bez nadpisywania całego dokumentu.
      // To jest poprawny sposób na zapisanie danych w Firestore.
      await setDoc(userDocRef, address, { merge: true });
      setMessage("Address saved successfully!");
      setTimeout(() => setMessage(''), 3000); // Ukryj komunikat po 3 sekundach
    } catch (err) {
      setMessage("Failed to save address. Please try again.");
      console.error("Error saving address:", err);
    }
    setLoading(false);
  };

  if (loading && !address.city) return <p>Loading address...</p>;

  return (
    <div>
      <h3>Shipping Address</h3>
      <Form onSubmit={handleSubmit}>
        <InputGroup>
          <Label htmlFor="street">Street & House Number</Label>
          <Input type="text" name="street" id="street" value={address.street} onChange={handleChange} />
        </InputGroup>
        <InputGroup>
          <Label htmlFor="city">City</Label>
          <Input type="text" name="city" id="city" value={address.city} onChange={handleChange} />
        </InputGroup>
        <InputGroup>
          <Label htmlFor="postalCode">Postal Code</Label>
          <Input type="text" name="postalCode" id="postalCode" value={address.postalCode} onChange={handleChange} />
        </InputGroup>
        <InputGroup>
          <Label htmlFor="country">Country</Label>
          <Input type="text" name="country" id="country" value={address.country} onChange={handleChange} />
        </InputGroup>
        <SubmitButton type="submit" disabled={loading}>{loading ? 'Saving...' : 'Save Address'}</SubmitButton>
        {message && <Message type={message.includes('success') ? 'success' : 'error'}>{message}</Message>}
      </Form>
    </div>
  );
};
export default AddressPage;
