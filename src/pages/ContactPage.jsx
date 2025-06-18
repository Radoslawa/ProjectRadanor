// src/pages/ContactPage.jsx
import React, { useState } from 'react';
import styled, { keyframes } from 'styled-components';
import { Link } from 'react-router-dom';

import Navbar from '../components/common/Navbar';
import Footer from '../components/common/Footer';

import { db } from '../firebase';
import { collection, addDoc, serverTimestamp } from "firebase/firestore"; 

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
  max-width: 1100px;
  margin: 0 auto;
  padding: 120px 2rem 4rem;
  color: ${({ theme }) => theme.colors.black || '#000'};
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 3rem;
  align-items: start;

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
  }
`;

const Section = styled.div`
  background-color: ${({ theme }) => theme.colors.white || '#fff'};
  padding: 2rem;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.08);
`;

const SectionTitle = styled.h1`
  font-size: 2rem;
  margin-top: 0;
  margin-bottom: 1.5rem;
  border-bottom: 1px solid #eee;
  padding-bottom: 1rem;
`;

const ContactForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const InputGroup = styled.div`
  display: flex;
  flex-direction: column;
`;

const Label = styled.label`
  font-size: 0.9rem;
  margin-bottom: 0.4rem;
  color: ${({ theme }) => theme.colors.darkGrey || '#555'};
`;

const Input = styled.input`
  padding: 0.8em 1em;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 1rem;
  font-family: inherit;
  &:focus {
    outline: none;
    border-color: ${({ theme }) => theme.colors.primary || '#0a0a0a'};
  }
`;

const Textarea = styled.textarea`
  padding: 0.8em 1em;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 1rem;
  font-family: inherit;
  min-height: 150px;
  resize: vertical;
  &:focus {
    outline: none;
    border-color: ${({ theme }) => theme.colors.primary || '#0a0a0a'};
  }
`;

const SubmitButton = styled.button`
  background-color: ${({ theme }) => theme.colors.primary || '#0a0a0a'};
  color: ${({ theme }) => theme.colors.white || '#fff'};
  border: none;
  padding: 0.9em 1.8em;
  font-size: 1rem;
  font-weight: 500;
  text-transform: uppercase;
  border-radius: 15px;
  cursor: pointer;
  transition: background-color 0.3s ease;
  margin-top: 1rem;
  
  &:hover {
    background-color: ${({ theme }) => theme.colors.secondary || '#303030'};
  }
`;

const ContactInfo = styled.div`
  p {
    margin: 0 0 1rem 0;
    line-height: 1.6;
    font-size: 1rem;
  }
  strong {
    display: block;
    margin-bottom: 0.25rem;
    color: ${({ theme }) => theme.colors.primary || '#0a0a0a'};
  }
`;

// --- Styled Components dla Modala (z poprawioną animacją) ---
const fadeIn = keyframes`
  from { opacity: 0; }
  to { opacity: 1; }
`;

// POPRAWIONA ANIMACJA: Usunięto translate, zostawiono tylko scale i opacity
const scaleIn = keyframes`
  from { transform: scale(0.9); opacity: 0; }
  to { transform: scale(1); opacity: 1; }
`;

const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.6);
  z-index: 1050;
  display: flex;
  justify-content: center;
  align-items: center;
  animation: ${fadeIn} 0.3s ease-out;
`;

const ModalContent = styled.div`
  background-color: ${({ theme }) => theme.colors.white || '#fff'};
  color: ${({ theme }) => theme.colors.black || '#000'};
  padding: 2rem 3rem;
  border-radius: 8px;
  box-shadow: 0 5px 15px rgba(0,0,0,0.3);
  text-align: center;
  max-width: 500px;
  width: 90%;
  /* Pozycjonowanie nie jest już potrzebne, bo ModalOverlay to robi */
  animation: ${scaleIn} 0.3s ease-out;
`;

const ModalTitle = styled.h2`
  font-size: 1.8rem;
  margin-top: 0;
  margin-bottom: 1rem;
  color: ${({ theme }) => theme.colors.primary || '#0a0a0a'};
`;

const ModalMessage = styled.p`
  margin: 0 0 1.5rem 0;
  line-height: 1.6;
`;

const CloseButton = styled.button`
  background-color: ${({ theme }) => theme.colors.primary || '#0a0a0a'};
  color: ${({ theme }) => theme.colors.white || '#fff'};
  border: none;
  padding: 0.7em 1.5em;
  font-size: 1rem;
  font-weight: 500;
  border-radius: 25px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: ${({ theme }) => theme.colors.secondary || '#303030'};
  }
`;

const ContactPage = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [loading, setLoading] = useState(false); // Stan do obsługi ładowania
  const [error, setError] = useState(''); // Stan do obsługi błędów

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData(prev => ({ ...prev, [id]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');
   // Stwórz nowy obiekt wiadomości z dodatkową datą
    const newMessage = {
      ...formData,
      createdAt: serverTimestamp(), // Dodaje datę utworzenia po stronie serwera
      read: false, // Opcjonalny status, czy wiadomość została przeczytana
    };
    try {
      // Dodaj nowy dokument do kolekcji 'messages' w Firestore
      const docRef = await addDoc(collection(db, "messages"), newMessage);
      console.log("Message sent with ID: ", docRef.id);
      setIsSubmitted(true); // Pokaż modal sukcesu
      setFormData({ name: '', email: '', message: '' }); // Wyczyść formularz
    } catch (err) {
      console.error("Error sending message: ", err);
      setError("Sorry, something went wrong. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  const closeModal = () => {
    setIsSubmitted(false);
    setFormData({ name: '', email: '', message: '' });
  };

return (
    <PageWrapper>
      <Navbar animate={true} variant="light" />
      <MainContent>
        <Section>
          <SectionTitle>Send Us a Message</SectionTitle>
          <ContactForm onSubmit={handleSubmit}>
            <InputGroup>
              <Label htmlFor="name">Your Name</Label>
              <Input type="text" id="name" required value={formData.name} onChange={handleChange} />
            </InputGroup>
            <InputGroup>
              <Label htmlFor="email">Your Email</Label>
              <Input type="email" id="email" required value={formData.email} onChange={handleChange} />
            </InputGroup>
            <InputGroup>
              <Label htmlFor="message">Your Message</Label>
              <Textarea id="message" required value={formData.message} onChange={handleChange}></Textarea>
            </InputGroup>
            <SubmitButton type="submit" disabled={loading}>
              {loading ? 'Sending...' : 'Send Message'}
            </SubmitButton>
            {error && <p style={{color: 'red', marginTop: '1rem'}}>{error}</p>}
          </ContactForm>
        </Section>
        <Section>
          <SectionTitle>Contact Information</SectionTitle>
          <ContactInfo>
            <p><strong>Address:</strong><br />123 Bike Lane, Cycle City, 12345, Germany</p>
            <p><strong>Phone:</strong><br />+49 (0) 123 456 7890</p>
            <p><strong>Email:</strong><br />contact@radanor.bike</p>
            <p><strong>Business Hours:</strong><br />Monday - Friday: 9:00 AM - 6:00 PM</p>
          </ContactInfo>
        </Section>
      </MainContent>
      <Footer animate={true} />

      {isSubmitted && (
        <ModalOverlay onClick={closeModal}>
          <ModalContent onClick={(e) => e.stopPropagation()}>
            <ModalTitle>Message Sent!</ModalTitle>
            <ModalMessage>
              Thank you for your message! We will get back to you shortly.
            </ModalMessage>
            <CloseButton onClick={closeModal}>Close</CloseButton>
          </ModalContent>
        </ModalOverlay>
      )}
    </PageWrapper>
  );
};

export default ContactPage;


