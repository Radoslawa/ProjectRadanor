// src/pages/account/ChangePasswordPage.jsx
import React, { useState } from 'react';
import styled from 'styled-components';
import { useAuth } from '../../contexts/AuthContext';

const SectionContent = styled.div`
  h3 { font-size: 1.5rem; margin-top: 0; }
`;
const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  max-width: 400px;
  margin-top: 1.5rem;
`;
const InputGroup = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
`;
const Label = styled.label` font-size: 0.9rem; margin-bottom: 0.4rem; color: #555; `;
const Input = styled.input`
  padding: 0.8em 2.5em 0.8em 1em;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 1rem;
  font-family: inherit;
  &:focus { outline: none; border-color: #0a0a0a; }
`;
const SubmitButton = styled.button`
  background-color: #0a0a0a; color: #fff; border: none;
  padding: 0.8em 1.5em; font-size: 0.9rem; font-weight: 500;
  border-radius: 5px; cursor: pointer; transition: background-color 0.3s;
  margin-top: 1rem; align-self: flex-start;
  &:hover:not(:disabled) { background-color: #303030; }
  &:disabled { opacity: 0.6; cursor: not-allowed; }
`;
const Message = styled.p`
  margin-top: 1rem;
  font-weight: 500;
  color: ${({ type }) => (type === 'success' ? '#28a745' : '#a00')};
`;
const PasswordToggleIcon = styled.span`
  position: absolute;
  right: 12px;
  top: 60%; 
  transform: translateY(-50%);
  cursor: pointer;
  color: #555;
  i { font-size: 1.1rem; }
`;

const ChangePasswordPage = () => {
  const { updateUserPassword } = useAuth();
  const [passwords, setPasswords] = useState({ current: '', new: '', confirm: '' });
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const [loading, setLoading] = useState(false);

  const [showCurrent, setShowCurrent] = useState(false);
  const [showNew, setShowNew] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setPasswords(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (passwords.new !== passwords.confirm) {
      return setError("New passwords do not match.");
    }
    if (passwords.new.length < 6) {
      return setError("New password must be at least 6 characters long.");
    }

    try {
      setError('');
      setSuccess('');
      setLoading(true);
      await updateUserPassword(passwords.current, passwords.new);
      setSuccess("Password updated successfully!");
      setPasswords({ current: '', new: '', confirm: '' });
    } catch (err) {
      console.error("Password update failed:", err.code);
      // --- ZMIANA TUTAJ: Lepsza obsługa błędów ---
      switch (err.code) {
        case 'auth/wrong-password':
          setError('The current password you entered is incorrect.');
          break;
        case 'auth/too-many-requests':
          setError('Too many attempts. Please try again later.');
          break;
        default:
          setError('Failed to update password. Please try again.');
          break;
      }
    }
    setLoading(false);
  };

  return (
    <SectionContent>
      <h3>Change Password</h3>
      <Form onSubmit={handleSubmit}>
        <InputGroup>
          <Label htmlFor="current">Current Password</Label>
          <Input type={showCurrent ? 'text' : 'password'} id="current" name="current" value={passwords.current} onChange={handleChange} required />
          <PasswordToggleIcon onClick={() => setShowCurrent(!showCurrent)}>
            <i className={showCurrent ? "fas fa-eye-slash" : "fas fa-eye"}></i>
          </PasswordToggleIcon>
        </InputGroup>
        <InputGroup>
          <Label htmlFor="new">New Password</Label>
          <Input type={showNew ? 'text' : 'password'} id="new" name="new" value={passwords.new} onChange={handleChange} required />
          <PasswordToggleIcon onClick={() => setShowNew(!showNew)}>
            <i className={showNew ? "fas fa-eye-slash" : "fas fa-eye"}></i>
          </PasswordToggleIcon>
        </InputGroup>
        <InputGroup>
          <Label htmlFor="confirm">Confirm New Password</Label>
          <Input type={showConfirm ? 'text' : 'password'} id="confirm" name="confirm" value={passwords.confirm} onChange={handleChange} required />
          <PasswordToggleIcon onClick={() => setShowConfirm(!showConfirm)}>
            <i className={showConfirm ? "fas fa-eye-slash" : "fas fa-eye"}></i>
          </PasswordToggleIcon>
        </InputGroup>
        <SubmitButton type="submit" disabled={loading}>Update Password</SubmitButton>
        {error && <Message type="error">{error}</Message>}
        {success && <Message type="success">{success}</Message>}
      </Form>
    </SectionContent>
  );
};
export default ChangePasswordPage;
