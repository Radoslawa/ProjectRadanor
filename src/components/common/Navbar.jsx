import React, { useRef, useEffect, useState, useMemo } from 'react';
import styled, { css } from 'styled-components';
import { Link, useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { useCart } from '../../contexts/CartContext';
import { useAuth } from '../../contexts/AuthContext';

import LanguageSelector from './LanguageSelector';
import SearchBar from './SearchBar';
import { getUniqueCategories } from '../../data/allBikesData.js';

// --- Styled Components ---

const NavStyled = styled.nav`
  position: absolute;
  top: 0; 
  left: 0;
  width: 100%;
  padding: 1.25em 1.5em;
  display: flex;
  align-items: center;
  justify-content: space-between;
  z-index: 1000;
  color: ${({ theme, $variant }) => ($variant === 'light' ? theme.colors.black : theme.colors.white)};

  opacity: 0;
  visibility: hidden;
  transform: translateY(-120%);
  will-change: transform, opacity;

  @media (max-width: ${({ theme }) => theme.breakpoints.tabletS || '768px'}) {
    .nav-links-desktop { display: none; }
   
  }
`;

const LogoContainer = styled.div`
  font-size: 35px;
  font-weight: 550;
  font-family: ${({ theme }) => theme.fonts.main};
  text-transform: uppercase;
  letter-spacing: 1px;
  flex-shrink: 0; 
  z-index: 1002;
  a { 
    color: ${({ $isMobileMenuOpen, theme }) => $isMobileMenuOpen ? theme.colors.black : 'inherit'};
    text-decoration: none; 
    transition: color 0.3s ease;
  }
`;

const NavLinksContainer = styled.div`
  display: flex;
  gap: 0.9em;
  align-items: center; 
  flex-grow: 1;
  justify-content: flex-start; 
  margin-left: 4vw;

  @media (max-width: ${({ theme }) => theme.breakpoints.tabletS || '768px'}) {
    display: none;
  }
`;

const NavLinkItem = styled.div`
  position: relative;
  & > a { 
    color: inherit; 
    text-decoration: none; 
    font-size: 30px;
    font-family: ${({ theme }) => theme.fonts.main};
    text-transform: uppercase; 
    font-weight: 400;
     padding: 0.5em; 
    transition: color 0.3s ease; 
    cursor: pointer; 
    display: inline-flex; 
    align-items: center; 
    line-height: 1.2; 
    letter-spacing: 0.5px;
    &:hover {
      color: ${({ theme, $variant }) => ($variant === 'light' ? theme.colors.primary : theme.colors.accent)};
    }
  }
`;

const DropdownMenu = styled.div`
  position: absolute;
  top: 100%; 
  left: 50%;
  transform: translateX(-50%) translateY(${props => props.$isOpen ? '0' : '-10px'});
  min-width: 250px; 
  background-color: #fff;
  border-radius: 6px; 
  box-shadow: 0 5px 15px rgba(0,0,0,0.2);
  padding: 0.5rem 0;
  z-index: 1001;
  opacity: ${props => props.$isOpen ? 1 : 0};
  visibility: ${props => props.$isOpen ? 'visible' : 'hidden'};
  transition: opacity 0.2s ease, transform 0.2s ease;
  pointer-events: ${props => props.$isOpen ? 'auto' : 'none'};
`;

const DropdownMenuItem = styled(Link)`
  display: block; 
  padding: 0.8em 1.5em;
  color: #000;
  text-decoration: none; 
  font-size: 1.5rem;
  text-transform: capitalize; 
  white-space: nowrap;
  font-family: ${({ theme }) => theme.fonts.main};
  &:hover { background-color: ${({ theme }) => theme.colors.accent || '#f0f0f0'}; }
`;



const NavActionsDesktop = styled.div`
  display: flex;
  align-items: center;
  gap: 0.8em;
  flex-shrink: 0; 
 
  .search-input-container { order: 1; }
  .search-icon-button { order: 2; }
  .language-selector { order: 3; }
  .cart-icon-link { order: 4; }
  .user-info-link { order: 5; }
  .login-icon-link { order: 5; } 

  @media (max-width: ${({ theme }) => theme.breakpoints.tabletS || '768px'}) {
    display: none;
  }
`;

const BaseIconButton = styled.button`
  position: relative; 
  display: flex; 
  justify-content: center; 
  align-items: center;
  width: 44px; 
  height: 44px; 
  padding: 0; 
  color: #000; 
  background-color: #fff;
  border-radius: 15px; 
  border: 1px solid transparent; 
  cursor: pointer; 
  text-decoration: none;
  transition: background-color 0.3s ease, transform 0.2s ease;
  &:hover { background-color: #f0f0f0; 
  transform: translateY(-1px); }
  i { font-size: 1rem; color: inherit; }
`;

const IconButton = styled(BaseIconButton)``;
const IconLink = styled(BaseIconButton).attrs({ as: Link })``;
const CartBadge = styled.span`
  position: absolute;
  top: 0px; 
  right: 0px;
  background-color: ${({ theme }) => theme.colors.attention || 'red'};
  color: white; 
  border-radius: 50%;
  width: 20px; 
  height: 20px;
  font-size: 11px; 
  font-weight: bold; 
  display: flex;
  align-items: center; 
  justify-content: center; 
  border: 2px solid #fff;
`;
const UserInfoLink = styled(Link)`
  display: flex; 
  align-items: center; 
  gap: 0.75rem; 
  color: ${({ theme }) => theme.colors.black};
  background-color: rgba(255, 255, 255, 0.5); 
  padding: 0.5rem 1rem; 
  border-radius: 15px; 
  text-decoration: none;
  transition: background-color 0.3s ease;
  &:hover { background-color: rgba(255, 255, 255, 0.2); }
`;
const WelcomeText = styled.span`
  font-size: 0.9rem; font-weight: 500; white-space: nowrap; 
`;
const LogoutButton = styled.button`
  font-size: 0.85rem; 
  font-weight: 600; 
  background: none; 
  border: none;
  color: inherit;
  cursor: pointer; 
  text-decoration: underline;
  padding: 0.5em; 
  opacity: 0.8; 
  transition: opacity 0.3s ease;
  &:hover { opacity: 1; }
`;

const HamburgerButton = styled.button`
  display: none; 
  position: relative;
   width: 44px; 
   height: 44px;
  border: none; 
  background: transparent; 
  z-index: 1002; 
  cursor: pointer;

  @media (max-width: ${({ theme }) => theme.breakpoints.tabletS || '768px'}) {
    display: block;
  }

  span {
    display: block; width: 24px; height: 2px;
    background-color: ${({ $isMobileMenuOpen, theme, $variant }) => 
      $isMobileMenuOpen ? theme.colors.black : ($variant === 'light' ? theme.colors.black : theme.colors.white)};
    margin: 4px auto;
    transition: all 0.3s ease-in-out;
  }
  
  ${({ $isMobileMenuOpen }) => $isMobileMenuOpen && css`
    span:nth-child(1) { transform: translateY(6px) rotate(45deg); }
    span:nth-child(2) { opacity: 0; }
    span:nth-child(3) { transform: translateY(-6px) rotate(-45deg); }
  `}
`;

const MobileMenuOverlay = styled.div`
  position: fixed; 
  top: 0; 
  left: 0; 
  width: 100%; 
  height: 100%;
  background-color: #fff; z-index: 1001;
  transform: translateX(${({ $isOpen }) => $isOpen ? '0' : '100%'});
  transition: transform 0.4s cubic-bezier(0.77, 0, 0.175, 1);
  display: flex; 
  flex-direction: column; 
  justify-content: center;
  align-items: center; 
  padding: 2rem; 
  overflow-y: auto;

  @media (max-width: ${({ theme }) => theme.breakpoints.tabletS || '768px'}) {
    display: flex; 
  }
`;

const CloseButton = styled.button`
  position: absolute;
  top: 1.5em;
  right: 1.5em;
  background: none;
  border: none;
  font-size: 2rem;
  color: #000;
  cursor: pointer;
  z-index: 1003; 
  display: none; 

  @media (max-width: ${({ theme }) => theme.breakpoints.tabletS || '768px'}) {
    display: block; 
  }
`;

const MobileNavLinks = styled.div`
  display: flex; 
  flex-direction: column; 
  align-items: center;
  gap: 2rem;
`;
const MobileNavLink = styled(Link)`
  font-size: 2rem; 
  color: #000; 
  text-decoration: none;
  font-family: ${({ theme }) => theme.fonts.main};
  text-transform: uppercase;
`;
const MobileActionsContainer = styled.div`
  display: flex; 
  align-items: center; 
  gap: 1.5rem; 
  margin-top: 3rem; 
`;


const Navbar = ({ animate, variant = 'dark' }) => {
  const { t } = useTranslation();
  const gsap = window.gsap;
  const navigate = useNavigate();
  const navRef = useRef(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isBikesDropdownOpen, setIsBikesDropdownOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  
  const { cartItems } = useCart();
  const { currentUser, logout } = useAuth();
  
  const bikeCategories = useMemo(() => getUniqueCategories(), []);
  const totalItemsInCart = useMemo(() => {
    return cartItems.reduce((total, item) => total + item.quantity, 0);
  }, [cartItems]);

  const bikesDropdownTimer = useRef(null);
  useEffect(() => {
    if (!gsap || !animate || !navRef.current) return;
    gsap.to(navRef.current, {
        y: '0%', opacity: 1, visibility: 'visible',
        duration: 1.5, ease: 'hop', delay: 0.7 
    });
  }, [animate, gsap]);

  useEffect(() => {
    document.body.style.overflow = isMobileMenuOpen ? 'hidden' : 'auto';
    return () => { document.body.style.overflow = 'auto'; };
  }, [isMobileMenuOpen]);

  const handleBikesMouseEnter = () => { clearTimeout(bikesDropdownTimer.current); setIsBikesDropdownOpen(true); };
  const handleBikesMouseLeave = () => { bikesDropdownTimer.current = setTimeout(() => setIsBikesDropdownOpen(false), 200); };
  const handleSearchSubmit = (query) => { navigate(`/bikes/${query.toLowerCase().replace(/\s+/g, '-')}`); setIsSearchOpen(false); };
  
  const handleLogout = (event) => {
    event.preventDefault();
    event.stopPropagation();
    logout();
    navigate('/'); 
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <NavStyled ref={navRef} $variant={variant}>
        <LogoContainer $isMobileMenuOpen={isMobileMenuOpen}>
          <Link to="/">RadAnOr</Link>
        </LogoContainer>
        
        <NavLinksContainer className="nav-links-desktop">
          <NavLinkItem $variant={variant}><Link to="/about">{t('nav_about')}</Link></NavLinkItem>
          <NavLinkItem $variant={variant} onMouseEnter={handleBikesMouseEnter} onMouseLeave={handleBikesMouseLeave}>
            <Link to="/all-bikes">{t('nav_bikes')}</Link>
            <DropdownMenu $isOpen={isBikesDropdownOpen} onMouseEnter={handleBikesMouseEnter} onMouseLeave={handleBikesMouseLeave}>
              {bikeCategories.map(category => (
                <DropdownMenuItem
                  key={category.name}
                  to={`/bikes/${category.name.toLowerCase().replace(/\s+/g, '-')}`}
                  onClick={() => setIsBikesDropdownOpen(false)}
                >
                  {category.name}
                </DropdownMenuItem>
              ))}
              {bikeCategories.length > 0 && <DropdownMenuItem to="/all-bikes" onClick={() => setIsBikesDropdownOpen(false)} style={{borderTop: '1px solid #eee', fontWeight:'bold'}}>{t('nav_view_all_categories')}</DropdownMenuItem>}
            </DropdownMenu>
          </NavLinkItem>
          <NavLinkItem $variant={variant}><Link to="/stories">{t('nav_stories')}</Link></NavLinkItem>
        </NavLinksContainer>
        
       
        <NavActionsDesktop>
       
          <IconButton onClick={() => setIsSearchOpen(!isSearchOpen)} aria-label="Toggle search" className="search-icon-button">
            <i className="fas fa-search"></i>
          </IconButton>
        
          <SearchBar isOpen={isSearchOpen} onSearch={handleSearchSubmit} className="search-input-container" />
          
          <LanguageSelector className="language-selector" />
          
          <IconLink to="/cart" className="cart-icon-link"><i className="fas fa-shopping-cart"></i>{totalItemsInCart > 0 && <CartBadge>{totalItemsInCart}</CartBadge>}</IconLink>
          {currentUser ? (
            <UserInfoLink to="/account" className="user-info-link">
              <WelcomeText>{t('user_greeting', { name: currentUser.displayName || 'User' })}</WelcomeText>
              <LogoutButton onClick={handleLogout}>{t('user_logout')}</LogoutButton>
            </UserInfoLink>
          ) : (
            <IconLink to="/login" className="login-icon-link"><i className="fas fa-user"></i></IconLink>
          )}
        </NavActionsDesktop>

        <HamburgerButton onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} $isMobileMenuOpen={isMobileMenuOpen} $variant={variant}>
          <span></span><span></span><span></span>
        </HamburgerButton>
      </NavStyled>

      <MobileMenuOverlay $isOpen={isMobileMenuOpen}>
        <CloseButton onClick={() => setIsMobileMenuOpen(false)} aria-label="Close menu">
            &times;
        </CloseButton>
        <MobileNavLinks>
          <MobileNavLink to="/about" onClick={() => setIsMobileMenuOpen(false)}>{t('nav_about')}</MobileNavLink>
          <MobileNavLink to="/all-bikes" onClick={() => setIsMobileMenuOpen(false)}>{t('nav_bikes')}</MobileNavLink>
          <MobileNavLink to="/stories" onClick={() => setIsMobileMenuOpen(false)}>{t('nav_stories')}</MobileNavLink>
          <MobileActionsContainer>
              <LanguageSelector />
              <IconLink to="/cart" onClick={() => setIsMobileMenuOpen(false)}>
                  <i className="fas fa-shopping-cart"></i>
                  {totalItemsInCart > 0 && <CartBadge>{totalItemsInCart}</CartBadge>}
              </IconLink>
              {currentUser ? (
                <UserInfoLink to="/account" onClick={() => setIsMobileMenuOpen(false)} style={{backgroundColor: 'rgba(0,0,0,0.1)', color: '#000'}}>
                  <WelcomeText>{t('user_greeting', { name: currentUser.displayName || 'User' })}</WelcomeText>
                </UserInfoLink>
              ) : (
                <IconLink to="/login" onClick={() => setIsMobileMenuOpen(false)}>
                  <i className="fas fa-user"></i>
                </IconLink>
              )}
          </MobileActionsContainer>
          {currentUser && (
              <LogoutButton style={{color: '#000', marginTop: '1rem', fontSize: '1rem'}} onClick={handleLogout}>{t('user_logout')}</LogoutButton>
          )}
        </MobileNavLinks>
      </MobileMenuOverlay>
    </>
  );
};
export default Navbar;