// src/pages/CheckoutPage.jsx
import React, { useState, useEffect, useMemo, useCallback } from 'react';
import styled from 'styled-components';
import { Link, useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { useCart } from '../contexts/CartContext';
import { useAuth } from '../contexts/AuthContext';
import { db } from '../firebase';
import { doc, getDoc, setDoc, addDoc, collection, serverTimestamp } from 'firebase/firestore';

import Navbar from '../components/common/Navbar';
import Footer from '../components/common/Footer';

// --- Styled Components ---

const CheckoutPageWrapper = styled.div`
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  background-color: ${({ theme }) => theme.colors.grey || '#f0f0f0'};
`;

const MainContent = styled.main`
  flex-grow: 1;
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 120px 2rem 4rem;
  color: ${({ theme }) => theme.colors.black || '#000'};

  @media (max-width: ${({ theme }) => theme.breakpoints.tabletS || '768px'}) {
    padding: 100px 1rem 2rem; 
  }
`;

const Title = styled.h1`
  font-size: 2.5rem;
  font-family: ${({ theme }) => theme.fonts.main};
  margin-bottom: 2rem;
  text-align: center;
  border-bottom: 1px solid #ddd;
  padding-bottom: 1rem;

  @media (max-width: ${({ theme }) => theme.breakpoints.tabletS || '768px'}) {
    font-size: 2rem; 
    margin-bottom: 1.5rem;
  }
`;

const CheckoutForm = styled.form`
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: 3rem;
  align-items: start;

  @media (max-width: 900px) {
    grid-template-columns: 1fr; /* ZMIANA: Jedna kolumna na mniejszych ekranach */
    gap: 2rem; 
  }
`;

const FormSection = styled.div`
  background-color: #fff;
  padding: 2rem;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.08);

  @media (max-width: ${({ theme }) => theme.breakpoints.tabletS || '768px'}) {
    padding: 1.5rem; 
  }
`;

const InnerFormLayout = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const SectionTitle = styled.h2`
  font-size: 1.5rem;
  margin-top: 0;
  margin-bottom: 1.5rem;

  @media (max-width: ${({ theme }) => theme.breakpoints.tabletS || '768px'}) {
    font-size: 1.3rem; 
    margin-bottom: 1rem;
  }
`;

const InputGroup = styled.div`
  display: flex;
  flex-direction: column;
`;

const Label = styled.label`
  font-size: 0.9rem;
  margin-bottom: 0.4rem;
  color: #555;

  &.required::after {
    content: ' *';
    color: red;
  }
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

const Select = styled.select`
  padding: 0.8em 1em;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 1rem;
  font-family: inherit;
  background-color: white;
`;

const OrderSummary = styled.div`
  padding: 2rem;
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.08);
  align-self: flex-start;
  position: sticky;
  top: 120px; 

  @media (max-width: 900px) {
    position: static; /* ZMIANA: Usunięcie "przyklejenia" na mobilnych */
    margin-top: 2rem; 
  }
`;

const SummaryRow = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 1rem;
  font-size: 1rem;

  &.total {
    font-weight: bold;
    font-size: 1.2rem;
    margin-top: 1.5rem;
    padding-top: 1rem;
    border-top: 1px solid #ddd;
  }
`;

const PlaceOrderButton = styled.button`
  display: block;
  width: 100%;
  text-align: center;
  background-color: #0a0a0a;
  color: #fff;
  border: none;
  padding: 0.9em 1.5em;
  font-size: 1rem;
  font-weight: 500;
  text-transform: uppercase;
  border-radius: 25px;
  cursor: pointer;
  margin-top: 1.5rem;
  transition: background-color 0.3s ease, opacity 0.3s ease;
  
  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }

  &:hover:not(:disabled) {
    background-color: #303030;
  }
`;

const CheckboxGroup = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin-top: 1.5rem;

  label {
    font-size: 0.9rem;
    cursor: pointer;
  }
`;


const CheckoutPage = () => {
  const { t } = useTranslation();
  const { cartItems, clearCart } = useCart();
  const { currentUser } = useAuth();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    fullname: '', address: '', city: '', postalCode: '', country: 'Germany',
    cardNumber: '', cardName: '', expiryDate: '', cvc: '',
  });
  const [isPlacingOrder, setIsPlacingOrder] = useState(false);
  const [saveAddress, setSaveAddress] = useState(true);

  const loadUserData = useCallback(async () => {
    if (currentUser) {
      const userDocRef = doc(db, "users", currentUser.uid);
      const docSnap = await getDoc(userDocRef);
      if (docSnap.exists()) {
        const dbData = docSnap.data();
        setFormData(prev => ({
          ...prev,
          fullname: `${dbData.firstName || ''} ${dbData.lastName || ''}`.trim(),
          address: dbData.street || '',
          city: dbData.city || '',
          postalCode: dbData.postalCode || '',
          country: dbData.country || 'Germany',
        }));
      }
    }
  }, [currentUser]);

  useEffect(() => { 
    loadUserData(); 
  }, [loadUserData]);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    if (type === 'checkbox') {
      setSaveAddress(checked);
    } else {
      setFormData(prevData => ({ ...prevData, [name]: value }));
    }
  };

  const totalCost = useMemo(() => {
    return cartItems.reduce((total, item) => total + item.quantity * parseFloat(item.price), 0);
  }, [cartItems]);

  const handlePlaceOrder = async (e) => {
    e.preventDefault();
    if (!currentUser || cartItems.length === 0) return;

    setIsPlacingOrder(true);

    if (saveAddress) {
      const userDocRef = doc(db, "users", currentUser.uid);
      try {
        const addressData = {
          street: formData.address, city: formData.city,
          postalCode: formData.postalCode, country: formData.country,
        };
        await setDoc(userDocRef, addressData, { merge: true });
      } catch (err) { console.error("Error updating address:", err); }
    }

    
    const newOrder = {
      userId: currentUser.uid,
      items: cartItems.map(item => ({
        id: item.id,
        name: item.name,
        quantity: item.quantity,
        price: item.price,
        currency: item.currency,
        size: item.size || null
      })),
      totalCost: totalCost,
      shippingAddress: {
        fullname: formData.fullname, address: formData.address,
        city: formData.city, postalCode: formData.postalCode,
        country: formData.country,
      },
      createdAt: serverTimestamp(),
    };

    try {
      await addDoc(collection(db, "orders"), newOrder);
      clearCart(); 
      navigate('/order-success'); 
    } catch (error) {
      console.error("Error placing order: ", error);
      alert("There was an error placing your order. Please try again.");
    } finally {
      setIsPlacingOrder(false);
    }
  };

  const europeanCountries = [ "Austria", "Belgium", "Bulgaria", "Croatia", "Cyprus", "Czech Republic", "Denmark", "Estonia", "Finland", "France", "Germany", "Greece", "Hungary", "Ireland", "Italy", "Latvia", "Lithuania", "Luxembourg", "Malta", "Netherlands", "Poland", "Portugal", "Romania", "Slovakia", "Slovenia", "Spain", "Sweden", "United Kingdom" ];

  return (
    <CheckoutPageWrapper>
      <Navbar animate={true} variant="light" />
      <MainContent>
        <Title>{t('checkout_title')}</Title>
        <CheckoutForm id="checkout-form" onSubmit={handlePlaceOrder}>
          <FormSection>
            <InnerFormLayout>
              <SectionTitle>{t('shipping_address_title')}</SectionTitle>
              <InputGroup>
                <Label htmlFor="fullname" className="required">{t('fullname_label')}</Label>
                <Input type="text" id="fullname" name="fullname" value={formData.fullname} onChange={handleChange} required />
              </InputGroup>
              <InputGroup>
                <Label htmlFor="address" className="required">{t('address_label')}</Label>
                <Input type="text" id="address" name="address" value={formData.address} onChange={handleChange} required />
              </InputGroup>
              <InputGroup>
                <Label htmlFor="city" className="required">{t('city_label')}</Label>
                <Input type="text" id="city" name="city" value={formData.city} onChange={handleChange} required />
              </InputGroup>
              <InputGroup>
                <Label htmlFor="postalCode" className="required">{t('postal_code_label')}</Label>
                <Input type="text" id="postalCode" name="postalCode" value={formData.postalCode} onChange={handleChange} required />
              </InputGroup>
              <InputGroup>
                <Label htmlFor="country" className="required">{t('country_label')}</Label>
                <Select id="country" name="country" value={formData.country} onChange={handleChange} required>
                  {europeanCountries.map(country => ( <option key={country} value={country}>{country}</option> ))}
                </Select>
              </InputGroup>
              <CheckboxGroup>
                <input type="checkbox" id="saveAddress" name="saveAddress" checked={saveAddress} onChange={handleChange} />
                <label htmlFor="saveAddress">{t('save_address_label')}</label>
              </CheckboxGroup>

              <SectionTitle style={{ marginTop: '2rem' }}>{t('payment_info_title')}</SectionTitle>
              <InputGroup>
                <Label htmlFor="cardName" className="required">{t('card_name_label')}</Label>
                <Input type="text" id="cardName" name="cardName" value={formData.cardName} onChange={handleChange} />
              </InputGroup>
              <InputGroup>
                <Label htmlFor="cardNumber" className="required">{t('card_number_label')}</Label>
                <Input type="text" id="cardNumber" name="cardNumber" placeholder="•••• •••• •••• ••••" value={formData.cardNumber} onChange={handleChange} />
              </InputGroup>
              <div style={{ display: 'flex', gap: '1rem' }}>
                <InputGroup style={{ flex: '1' }}>
                  <Label htmlFor="expiryDate" className="required">{t('expiry_date_label')}</Label>
                  <Input type="text" id="expiryDate" name="expiryDate" placeholder="MM / YY" value={formData.expiryDate} onChange={handleChange}  />
                </InputGroup>
                <InputGroup style={{ flex: '1' }}>
                  <Label htmlFor="cvc" className="required">{t('cvc_label')}</Label>
                  <Input type="text" id="cvc" name="cvc" placeholder="•••" value={formData.cvc} onChange={handleChange}  />
                </InputGroup>
              </div>
            </InnerFormLayout>
          </FormSection>
          <OrderSummary>
            <SectionTitle>{t('order_summary_title')}</SectionTitle>
            <SummaryRow>
              <span>{t('subtotal_label')}</span>
              <span>{totalCost.toFixed(2)} {cartItems[0]?.currency || 'EUR'}</span>
            </SummaryRow>
            <SummaryRow>
              <span>{t('shipping_label')}</span>
              <span>FREE</span>
            </SummaryRow>
            <SummaryRow className="total">
              <span>{t('total_label')}</span>
              <span>{totalCost.toFixed(2)} {cartItems[0]?.currency || 'EUR'}</span>
            </SummaryRow>
            <PlaceOrderButton type="submit" form="checkout-form" disabled={isPlacingOrder}>
              {isPlacingOrder ? t('placing_order_button') : t('place_order_button')}
            </PlaceOrderButton>
          </OrderSummary>
        </CheckoutForm>
      </MainContent>
      <Footer animate={true} />
    </CheckoutPageWrapper>
  );
};
export default CheckoutPage;