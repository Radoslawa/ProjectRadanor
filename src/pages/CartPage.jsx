// src/pages/CartPage.jsx
import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { useCart } from '../contexts/CartContext'; 

import Navbar from '../components/common/Navbar';
import Footer from '../components/common/Footer';

// --- Styled Components ---

const CartPageWrapper = styled.div`
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
  padding: 140px 2rem 4rem;
  color: ${({ theme }) => theme.colors.black || '#000'};
`;

const Title = styled.h1`
  font-size: 2.5rem;
  font-family: ${({ theme }) => theme.fonts.main};
  margin-bottom: 3rem;
  text-align: center;
  border-bottom: 1px solid ${({ theme }) => theme.colors.grey || '#ddd'};
  padding-bottom: 1rem;
`;

const CartLayout = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: 2rem;

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
  }
`;

const CartItemsList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

const CartItem = styled.div`
  display: flex;
  gap: 1.5rem;
  padding: 1.5rem;
  background-color: ${({ theme }) => theme.colors.white || '#fff'};
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.08);

  @media (max-width: 600px) {
    flex-direction: column;
    align-items: center;
    text-align: center;
  }
`;

const ItemImage = styled.img`
  width: 120px;
  height: 90px;
  object-fit: cover;
  border-radius: 4px;
`;

const ItemDetails = styled.div`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
`;

const ItemName = styled.h3`
  margin: 0;
  font-size: 1.2rem;
  font-weight: 500;
  font-family: ${({ theme }) => theme.fonts.main};
  a {
    color: inherit;
    text-decoration: none;
    &:hover {
      text-decoration: underline;
    }
  }
`;

const ItemInfo = styled.p`
  margin: 0.25rem 0;
  font-size: 0.9rem;
  font-family: ${({ theme }) => theme.fonts.main};
  color: ${({ theme }) => theme.colors.darkGrey || '#555'};
`;

const ItemActions = styled.div`
  margin-top: auto;
  font-size: 0.9rem;
  display: flex;
  align-items: center;
  gap: 1.5rem;

  @media (max-width: 600px) {
    margin-top: 1rem;
    justify-content: center;
  }
`;

const RemoveButton = styled.button`
  background: none;
  border: none;
  color: ${({ theme }) => theme.colors.attention || 'red'};
  cursor: pointer;
  text-decoration: underline;
  padding: 0;
  font-size: 0.9rem;
  &:hover { color: darkred; }
`;

const QuantityControl = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  border: 1px solid #ccc;
  border-radius: 20px;
  padding: 4px;

  button {
    width: 28px;
    height: 28px;
    border-radius: 50%;
    border: none;
    background-color: #f0f0f0;
    cursor: pointer;
    font-size: 1rem;
    font-weight: bold;
    display: flex;
    align-items: center;
    justify-content: center;
    &:hover { background-color: #e0e0e0; }
  }

  span {
    min-width: 20px;
    text-align: center;
    font-weight: 500;
  }
`;

const CartSummary = styled.div`
  padding: 1.5rem;
  background-color: ${({ theme }) => theme.colors.white || '#fff'};
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.08);
  align-self: flex-start; 
  h2 {
    margin-top: 0;
    margin-bottom: 1.5rem;
    border-bottom: 1px solid #eee;
    padding-bottom: 1rem;
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

const CheckoutButton = styled(Link)`
  display: inline-block;
  width: auto;
  text-align: center;
  background-color: ${({ theme }) => theme.colors.primary || '#0a0a0a'};
  color: ${({ theme }) => theme.colors.white || '#fff'};
  border: none;
  padding: 0.9em 1.5em;
  font-size: 1rem;
  font-weight: 500;
  font-family: ${({ theme }) => theme.fonts.main};
  text-transform: uppercase;
  border-radius: 15px;
  cursor: pointer;
  text-decoration: none;
  transition: background-color 0.2s ease;

  &:hover {
    background-color: ${({ theme }) => theme.colors.secondary || '#303030'};
  }
`;

const EmptyCartMessage = styled.div`
  text-align: center;
  padding: 0.4rem 0;
  p {
    font-size: 1.2rem;
    margin-bottom: 1.5rem;
  }
`;

const CartPage = () => {
  const { cartItems, removeItemFromCart, updateItemQuantity} = useCart();

  const totalCost = React.useMemo(() => {
    return cartItems.reduce((total, item) => total + item.quantity * parseFloat(item.price), 0);
    
  }, [cartItems]);

 

  return (
    <CartPageWrapper>
      <Navbar animate={true} />
      <MainContent>
        <Title>Shopping Cart</Title>
        
        {cartItems.length === 0 ? (
          <EmptyCartMessage>
            <p>Your cart is currently empty.</p>
            <CheckoutButton to="/all-bikes">Continue Shopping</CheckoutButton>
          </EmptyCartMessage>
        ) : (
          <CartLayout>
            <CartItemsList>
              {cartItems.map(item => (
                <CartItem key={item.cartId}>
                  <ItemImage src={item.mainImage} alt={item.name} />
                  <ItemDetails>
                    <ItemName><Link to={`/bike/${item.id}`}>{item.name}</Link></ItemName>
                    <ItemInfo>Size: {item.size || 'One Size'}</ItemInfo>
                 <ItemInfo>Price: {parseFloat(item.price).toFixed(2)} {item.currency}</ItemInfo>
                    
                    <ItemActions>
                      <QuantityControl>
                        <button onClick={() => updateItemQuantity(item.cartId, item.quantity - 1)}>-</button>
                        <span>{item.quantity}</span>
                        <button onClick={() => updateItemQuantity(item.cartId, item.quantity + 1)}>+</button>
                      </QuantityControl>
                      <RemoveButton onClick={() => removeItemFromCart(item.cartId)}>Remove</RemoveButton>
                    </ItemActions>
                  </ItemDetails>
                </CartItem>
              ))}
            </CartItemsList>

            <CartSummary>
              <h2>Order Summary</h2>
              <SummaryRow>
                <span>Subtotal</span>
                <span>{totalCost.toFixed(2)} {cartItems[0]?.currency}</span>
              </SummaryRow>
              <SummaryRow>
                <span>Shipping</span>
                <span>FREE</span>
              </SummaryRow>
              <SummaryRow className="total">
                <span>Total</span>
                <span>{totalCost.toFixed(2)} {cartItems[0]?.currency}</span>
              </SummaryRow>
              <CheckoutButton to="/checkout">Proceed to Checkout</CheckoutButton>
             
            </CartSummary>
          </CartLayout>
        )}
      </MainContent>
      <Footer animate={true} />
    </CartPageWrapper>
  );
};

export default CartPage;