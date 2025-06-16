// src/components/common/Navbar.jsx
import React, { useRef, useEffect, useState, useMemo } from 'react';
import styled from 'styled-components';
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
  top: 0; left: 0;
  width: 100%;
  padding: 1.25em 1.5em;
  display: flex;
  align-items: center;
  justify-content: space-between;
  z-index: 1000;
  color: ${({ theme, $variant }) => ($variant === 'light' ? theme.colors.black : theme.colors.white) || '#fff'};
  
  opacity: 0;
  visibility: hidden;
  transform: translateY(-120%);
  will-change: transform, opacity;

  @media (max-width: ${({ theme }) => theme.breakpoints.tabletS || '600px'}) {
    .nav-links-desktop { display: none; }
    .nav-actions-container { flex-grow: 1; justify-content: flex-end; }
  }
`;

const LogoContainer = styled.div`
  font-size: 28px; /* Lekko powiększone logo tekstowe */
  font-weight: 500;
  font-family: ${({ theme }) => theme.fonts.main}; /* Użycie nowej czcionki */
  text-transform: uppercase;
  letter-spacing: 1px;
  flex-shrink: 0; 
  a { 
    color: inherit; 
    text-decoration: none; 
  }
`;

const NavLinksContainer = styled.div`
  display: flex;
  gap: 1em; /* Zwiększono odstęp */
  align-items: center; 
  flex-grow: 1; /* Pozwala temu elementowi się rozciągać */
  /* ZMIANA: Wyrównanie do lewej z marginesem */
  justify-content: flex-start; 
  margin-left: 3vw; /* Odstęp od logo */
`

const NavLinkItem = styled.div`
  position: relative;
  & > a, & > span { 
    color: inherit;
    text-decoration: none; 
    font-size: 25px; /* Dostosowano rozmiar */
    font-family: ${({ theme }) => theme.fonts.main}; /* Użycie nowej czcionki */
    text-transform: uppercase; 
    font-weight: 400; /* Lżejsza czcionka dla linków */
    padding: 0.5em; 
    transition: color 0.3s ease;
    cursor: pointer; 
    display: inline-flex; 
    align-items: center; 
    line-height: 1.2; 
    letter-spacing: 0.5px;
    &:hover {
      color: ${({ theme, $variant }) => ($variant === 'light' ? theme.colors.primary : theme.colors.accent) || '#ccc'};
    }
  }
`;

const DropdownMenu = styled.div`
  position: absolute;
  top: 100%; 
  left: 50%;
  transform: translateX(-50%) translateY(${props => props.$isOpen ? '0' : '-10px'});
  min-width: 200px; 
  background-color: ${({ theme }) => theme.colors.white || '#fff'};
  border-radius: 6px; 
  box-shadow: 0 5px 15px rgba(0,0,0,0.2);
  padding: 0.5rem 0;
  z-index: 1001;
  opacity: ${props => props.$isOpen ? 1 : 0};
  visibility: ${props => props.$isOpen ? 'visible' : 'hidden'};
  transition: opacity 0.2s ease-in-out, transform 0.2s ease-in-out;
  pointer-events: ${props => props.$isOpen ? 'auto' : 'none'};
`;

const DropdownMenuItem = styled(Link)`
  display: block; 
  padding: 0.8em 1.5em;
  color: ${({ theme }) => theme.colors.black || '#000'};
  text-decoration: none; 
  font-size: 1.5rem;
  text-transform: capitalize; 
  white-space: nowrap;
  font-family: ${({ theme }) => theme.fonts.main};
  &:hover { background-color: ${({ theme }) => theme.colors.accent || '#f0f0f0'}; }
`;

const NavActionsContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.8em; 
  flex-shrink: 0; 
`;

const BaseIconButton = styled.button`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 44px;
  height: 44px;
  padding: 0;
  color: ${({ theme }) => theme.colors.black || '#000'};
  background-color: ${({ theme }) => theme.colors.white || '#fff'};
  border-radius: 40%;
  border: 1px solid transparent;
  cursor: pointer;
  text-decoration: none;
  transition: background-color 0.3s ease, transform 0.2s ease;

  &:hover {
    background-color: ${({ theme }) => theme.colors.accent || '#f0f0f0'};
    transform: translateY(-1px);
  }

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
  display: 
  flex; align-items: center; 
  justify-content: center;
  border: 2px solid ${({ theme }) => theme.colors.white || '#fff'};
`;


const UserInfoLink = styled(Link)`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  color: inherit;
  background-color: rgba(255, 255, 255, 0.1); 
  padding: 0.5rem 1rem;
  border-radius: 22px;
  text-decoration: none;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: rgba(255, 255, 255, 0.2);
  }
`;

const WelcomeText = styled.span`
  font-size: 0.9rem;
  font-weight: 500;
  white-space: nowrap; 
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


const Navbar = ({ animate, variant = 'dark' }) => {
  const { t } = useTranslation();
  const gsap = window.gsap;
  const navigate = useNavigate();
  const navRef = useRef(null);
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

  const handleBikesMouseEnter = () => { clearTimeout(bikesDropdownTimer.current); setIsBikesDropdownOpen(true); };
  const handleBikesMouseLeave = () => { bikesDropdownTimer.current = setTimeout(() => setIsBikesDropdownOpen(false), 200); };
  const handleSearchSubmit = (query) => { navigate(`/bikes/${query.toLowerCase().replace(/\s+/g, '-')}`); setIsSearchOpen(false); };
  
  const handleLogout = (event) => {
    event.preventDefault(); // Zapobiega przejściu do /account
    event.stopPropagation(); // Zapobiega bąbelkowaniu zdarzenia
    logout();
    navigate('/'); 
  };

  return (
    <NavStyled ref={navRef} $variant={variant}>
      {/* ZMIANA: Powrót do logo tekstowego */}
      <LogoContainer>
        <Link to="/">RadAnOr</Link>
      </LogoContainer>
      
      <NavLinksContainer className="nav-links-desktop">
        <NavLinkItem $variant={variant}><Link to="/about">{t('nav_about')}</Link></NavLinkItem>
        <NavLinkItem $variant={variant} onMouseEnter={handleBikesMouseEnter} onMouseLeave={handleBikesMouseLeave}>
          <span>{t('nav_bikes')}</span> 
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
      
      <NavActionsContainer className="nav-actions-container">
        <LanguageSelector />
        <SearchBar isOpen={isSearchOpen} onSearch={handleSearchSubmit} />

        <IconButton $variant={variant} onClick={() => setIsSearchOpen(!isSearchOpen)} aria-label="Toggle search">
          <i className="fas fa-search"></i>
        </IconButton>

        {currentUser ? (
          <UserInfoLink to="/account">
            <WelcomeText>{t('user_greeting', { name: currentUser.displayName || 'User' })}</WelcomeText>
            <LogoutButton onClick={handleLogout}>{t('user_logout')}</LogoutButton>
          </UserInfoLink>
        ) : (
          <IconLink $variant={variant} to="/login" aria-label="Login or Register">
            <i className="fas fa-user"></i>
          </IconLink>
        )}
        
        <IconLink $variant={variant} to="/cart" aria-label="Shopping Cart"> 
          <i className="fas fa-shopping-cart"></i>
          {totalItemsInCart > 0 && <CartBadge>{totalItemsInCart}</CartBadge>}
        </IconLink>
      </NavActionsContainer>
    </NavStyled>
  );
};

export default Navbar;