// src/pages/AccountPage.jsx
import React from 'react';
import styled from 'styled-components';
import { NavLink, Outlet, useLocation, Navigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';

import Navbar from '../components/common/Navbar';
import Footer from '../components/common/Footer';

const PageWrapper = styled.div`
  width: 100%; min-height: 100vh;
  display: flex; flex-direction: column;
  background-color: ${({ theme }) => theme.colors.grey || '#f0f0f0'};
`;
const MainContent = styled.main`
  flex-grow: 1; width: 100%; max-width: 1100px;
  margin: 0 auto; padding: 120px 2rem 4rem;
  color: ${({ theme }) => theme.colors.black || '#000'};
`;
const Title = styled.h1`
  font-size: 2.5rem; margin-bottom: 2.5rem; text-align: center;
`;
const AccountLayout = styled.div`
  display: grid;
  grid-template-columns: 250px 1fr;
  gap: 2.5rem;
  align-items: start;
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;
const Sidebar = styled.aside`
  background-color: #fff;
  padding: 1.5rem;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.08);
`;
const SidebarNav = styled.nav`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;
const StyledNavLink = styled(NavLink)`
  padding: 0.8rem 1.2rem;
  text-decoration: none;
  color: ${({ theme }) => theme.colors.darkGrey};
  font-weight: 500;
  border-radius: 6px;
  transition: background-color 0.2s ease, color 0.2s ease;

  &.active, &:hover {
    background-color: ${({ theme }) => theme.colors.primary};
    color: ${({ theme }) => theme.colors.white};
  }
`;
const ContentOutlet = styled.div`
  background-color: #fff;
  padding: 2rem;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.08);
`;

const AccountPage = () => {
  const { currentUser } = useAuth();
  const location = useLocation();

  if (!currentUser && location.pathname !== '/login') {
    return <Navigate to="/login" replace />;
  }

  return (
    <PageWrapper>
      <Navbar animate={true} variant="light" />
      <MainContent>
        <Title>My Account</Title>
        <AccountLayout>
          <Sidebar>
            <SidebarNav>
              <StyledNavLink to="/account/profile" end>Personal Details</StyledNavLink>
              <StyledNavLink to="/account/address">Shipping Address</StyledNavLink>
              <StyledNavLink to="/account/password">Change Password</StyledNavLink>
              <StyledNavLink to="/cart">My Cart</StyledNavLink>
              <StyledNavLink to="/account/orders">My Orders</StyledNavLink>
              <StyledNavLink to="/account/returns">My Returns</StyledNavLink> 
              <StyledNavLink to="/account/delete" style={{color: 'red'}}>Delete Account</StyledNavLink>
              {/* Tutaj można dodać więcej linków, np. do historii zamówień */}
            </SidebarNav>
          </Sidebar>
          <ContentOutlet>
            {/* Tutaj będą renderowane nasze podstrony */}
            <Outlet />
          </ContentOutlet>
        </AccountLayout>
      </MainContent>
      <Footer animate={true} />
    </PageWrapper>
  );
};
export default AccountPage;


