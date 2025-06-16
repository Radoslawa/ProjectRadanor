// src/pages/LoginPage.jsx
import React, { useState } from 'react';
import styled from 'styled-components';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import Navbar from '../components/common/Navbar';
import Footer from '../components/common/Footer';

// --- Styled Components ---
const LoginPageWrapper = styled.div`
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  background-color: ${({ theme }) => theme.colors.grey || '#f0f0f0'};
`;
const MainContent = styled.main`
  flex-grow: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 120px 2rem 4rem;
  color: ${({ theme }) => theme.colors.black || '#000'};
`;
const FormContainer = styled.div`
  width: 100%;
  max-width: 1100px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  @media (max-width: ${({ theme }) => theme.breakpoints.laptopS || '900px'}) {
    grid-template-columns: 1fr;
    gap: 3rem;
  }
`;
const FormColumn = styled.div`
  display: flex;
  flex-direction: column;
`;
const FormTitle = styled.h2`
  font-size: 1.8rem;
  font-family: ${({ theme }) => theme.fonts.main};
  font-weight: 500;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  margin-bottom: 1.5rem;
  border-bottom: 1px solid ${({ theme }) => theme.colors.grey || '#ddd'};
  padding-bottom: 0.75rem;
`;
const Form = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;
const InputGroup = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
`;
const Label = styled.label`
  font-size: 0.9rem;
  margin-bottom: 0.4rem;
  color: ${({ theme }) => theme.colors.darkGrey || '#555'};
  &.required::after {
    content: ' *';
    color: red;
  }
`;
const PasswordInputWrapper = styled.div`
  position: relative;
  width: 100%;
`;
const Input = styled.input`
  width: 100%;
  padding: 0.8em 1em;
  ${PasswordInputWrapper} & {
    padding-right: 3em; 
  }
  border: 1px solid ${({ theme }) => theme.colors.grey || '#ccc'};
  border-radius: 4px;
  font-size: 1rem;
  font-family: inherit;
  box-sizing: border-box;
  
  &:focus {
    outline: none;
    border-color: ${({ theme }) => theme.colors.primary || '#0a0a0a'};
  }
`;
const Select = styled.select`
  padding: 0.8em 1em;
  border: 1px solid ${({ theme }) => theme.colors.grey || '#ccc'};
  border-radius: 4px;
  font-size: 1rem;
  font-family: inherit;
  background-color: white;
  &:focus {
    outline: none;
    border-color: ${({ theme }) => theme.colors.primary || '#0a0a0a'};
  }
`;
const PasswordToggleIcon = styled.span`
  position: absolute;
  right: 12px;
  top: 50%;
  transform: translateY(-50%);
  cursor: pointer;
  color: ${({ theme }) => theme.colors.darkGrey || '#555'};
  i { font-size: 1.1rem; }
`;
const SubmitButton = styled.button`
  background-color: ${({ theme }) => theme.colors.primary || '#0a0a0a'};
  color: ${({ theme }) => theme.colors.white || '#fff'};
  border: none;
  padding: 0.9em 1.8em;
  font-size: 1rem;
  font-weight: 500;
  text-transform: uppercase;
  border-radius: 25px;
  cursor: pointer;
  transition: background-color 0.3s ease, opacity 0.3s ease;
  margin-top: 1rem;
  width: 100%;
  &:hover:not(:disabled) {
    background-color: ${({ theme }) => theme.colors.secondary || '#303030'};
  }
  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }
`;
const Subtext = styled.p`
  font-size: 0.85rem;
  color: ${({ theme }) => theme.colors.darkGrey || '#555'};
  margin-top: 1rem;
`;
const ErrorMessage = styled.p`
  background-color: rgba(255, 0, 0, 0.1);
  color: #a00;
  border: 1px solid rgba(255, 0, 0, 0.2);
  padding: 1rem;
  border-radius: 4px;
  font-size: 0.9rem;
  text-align: center;
  margin-bottom: 1rem;
`;
const RequirementText = styled.p`
  font-size: 0.8rem;
  color: ${({ theme }) => theme.colors.darkGrey || '#555'};
  margin-top: 0.25rem;
  margin-left: 0.25rem;
`;

const LoginPage = () => {
  const navigate = useNavigate();
  const { register, login } = useAuth();
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const [loginData, setLoginData] = useState({ email: '', password: '' });
  const [registerData, setRegisterData] = useState({
    firstName: '', lastName: '', email: '', password: '',
    street: '', city: '', postalCode: '', country: '' 
  });

  const [showLoginPassword, setShowLoginPassword] = useState(false);
  const [showRegisterPassword, setShowRegisterPassword] = useState(false);

  const handleChange = (e, formType) => {
    const { id, value } = e.target;
    const keyMap = {
      'login-email': 'email', 'login-password': 'password',
      'reg-firstname': 'firstName', 'reg-lastname': 'lastName',
      'reg-email': 'email', 'reg-password': 'password',
      'reg-street': 'street', 'reg-city': 'city',
      'reg-postalCode': 'postalCode', 'reg-country': 'country'
    };
    const stateKey = keyMap[id];
    if (formType === 'login') {
      setLoginData(prev => ({ ...prev, [stateKey]: value }));
    } else {
      setRegisterData(prev => ({ ...prev, [stateKey]: value }));
    }
  };

  const handleLoginSubmit = async (event) => {
    event.preventDefault();
    try {
      setError(''); setLoading(true);
      await login(loginData.email, loginData.password);
      navigate('/account');
    } catch (err) {
      console.error("Login failed:", err);
      setError('Failed to log in. Please check your email or password.');
    }
    setLoading(false);
  };

  const handleRegisterSubmit = async (event) => {
    event.preventDefault();
    if (registerData.password.length < 6) {
      setError("Password must be at least 6 characters long.");
      return;
    }
    try {
      setError(''); setLoading(true);
      await register(registerData);
      navigate('/account');
    } catch (err) {
      console.error("Registration failed:", err);
      setError('Failed to create an account. The email might already be in use.');
    }
    setLoading(false);
  };

  return (
    <LoginPageWrapper>
      <Navbar animate={true} variant="light" />
      <MainContent>
        <FormContainer>
          <FormColumn>
            <FormTitle>I am a customer</FormTitle>
            {error && <ErrorMessage>{error}</ErrorMessage>}
            <Form onSubmit={handleLoginSubmit}>
              <InputGroup>
                <Label htmlFor="login-email" className="required">E-Mail Address</Label>
                <Input type="email" id="login-email" required value={loginData.email} onChange={(e) => handleChange(e, 'login')} />
              </InputGroup>
              <InputGroup>
                <Label htmlFor="login-password" className="required">Password</Label>
                <PasswordInputWrapper>
                  <Input type={showLoginPassword ? 'text' : 'password'} id="login-password" required value={loginData.password} onChange={(e) => handleChange(e, 'login')} />
                  <PasswordToggleIcon onClick={() => setShowLoginPassword(!showLoginPassword)}>
                    <i className={showLoginPassword ? "fas fa-eye-slash" : "fas fa-eye"}></i>
                  </PasswordToggleIcon>
                </PasswordInputWrapper>
              </InputGroup>
              <SubmitButton type="submit" disabled={loading}>Login</SubmitButton>
            </Form>
          </FormColumn>
          <FormColumn>
            <FormTitle>I am new here</FormTitle>
            <Form onSubmit={handleRegisterSubmit}>
              <InputGroup>
                <Label htmlFor="reg-firstname" className="required">First Name</Label>
                <Input type="text" id="reg-firstname" required value={registerData.firstName} onChange={(e) => handleChange(e, 'register')} />
              </InputGroup>
              <InputGroup>
                <Label htmlFor="reg-lastname" className="required">Last Name</Label>
                <Input type="text" id="reg-lastname" required value={registerData.lastName} onChange={(e) => handleChange(e, 'register')} />
              </InputGroup>
              <InputGroup>
                <Label htmlFor="reg-email" className="required">E-Mail Address</Label>
                <Input type="email" id="reg-email" required value={registerData.email} onChange={(e) => handleChange(e, 'register')} />
              </InputGroup>
              
              {/* --- DODANE POLA ADRESU --- */}
              <InputGroup>
                <Label htmlFor="reg-street">Street & House Number</Label>
                <Input type="text" id="reg-street" value={registerData.street} onChange={(e) => handleChange(e, 'register')} />
              </InputGroup>
              <InputGroup>
                <Label htmlFor="reg-city">City</Label>
                <Input type="text" id="reg-city" value={registerData.city} onChange={(e) => handleChange(e, 'register')} />
              </InputGroup>
              <InputGroup>
                <Label htmlFor="reg-postalCode">Postal Code</Label>
                <Input type="text" id="reg-postalCode" value={registerData.postalCode} onChange={(e) => handleChange(e, 'register')} />
              </InputGroup>
              <InputGroup>
                <Label htmlFor="reg-country">Country</Label>
                <Input type="text" id="reg-country" value={registerData.country} onChange={(e) => handleChange(e, 'register')} />
              </InputGroup>
              
              <InputGroup>
                <Label htmlFor="reg-password" className="required">Password</Label>
                <PasswordInputWrapper>
                  <Input 
                    type={showRegisterPassword ? 'text' : 'password'}
                    id="reg-password" 
                    required 
                    minLength="6"
                    value={registerData.password}
                    onChange={(e) => handleChange(e, 'register')}
                  />
                  <PasswordToggleIcon onClick={() => setShowRegisterPassword(!showRegisterPassword)}>
                    <i className={showRegisterPassword ? "fas fa-eye-slash" : "fas fa-eye"}></i>
                  </PasswordToggleIcon>
                </PasswordInputWrapper>
                <RequirementText>Password must be at least 6 characters.</RequirementText>
              </InputGroup>
              <Subtext>By creating an account, you agree to our Terms & Conditions and Privacy Policy.</Subtext>
              <RequirementText>* Required fields</RequirementText>
              <SubmitButton type="submit" disabled={loading}>Create Account</SubmitButton>
            </Form>
          </FormColumn>
        </FormContainer>
      </MainContent>
      <Footer animate={true} />
    </LoginPageWrapper>
  );
};

export default LoginPage;
