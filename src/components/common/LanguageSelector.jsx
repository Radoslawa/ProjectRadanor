// src/components/common/LanguageSelector.jsx
import React, { useState, useEffect, useRef, useMemo } from 'react';
import styled from 'styled-components';
import { useTranslation } from 'react-i18next'; 

// Styled Components 
const SelectorContainer = styled.div`
  display: flex;
  align-items: center;
`;
const LanguageSelectorStyled = styled.div`
  position: relative;
  display: inline-block;
  font-family: ${({ theme }) => theme.fonts.main};
`;
const LanguageSelectorButton = styled.button`
  height: 44px;
  border-radius: 15px;
  padding: 0 12px;
  background-color: #fff;
  color: #000;
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  min-width: 110px; /* Zwiększono, aby zmieścić "Deutsch" */
  justify-content: space-between;
  font-size: 14px;
  font-weight: 500;
  line-height: 1;
  transition: background-color 0.3s ease;
  &:focus, &:hover {
    background-color: rgba(255, 255, 255, 0.9);
    outline: none;
  }
`;
const CurrentLangFlag = styled.span`
  margin-right: 8px; /* Zwiększono odstęp */
  font-size: 1.1em;
  line-height: 1;
`;
const CurrentLangText = styled.span`
  line-height: 1;
`;
const DropdownArrow = styled.svg`
  transition: transform 0.2s ease-in-out;
  fill: #131313;
  margin-left: 5px;
  transform: ${props => (props.$isExpanded ? 'rotate(180deg)' : 'rotate(0deg)')};
`;
const LanguageDropdownList = styled.ul`
  position: absolute;
  top: calc(100% + 8px);
  left: 50%;
  transform: translateX(-50%) ${props => (props.$isHidden ? 'translateY(-10px)' : 'translateY(0)')};
  background-color: #fcf8f8;
  border: 1px solid #f3f2f2;
  border-radius: 6px;
  list-style: none;
  padding: 6px 0;
  margin: 0;
  z-index: 1050;
  min-width: 160px;
  box-shadow: 0 5px 15px rgba(0,0,0,0.4);
  opacity: ${props => (props.$isHidden ? 0 : 1)};
  visibility: ${props => (props.$isHidden ? 'hidden' : 'visible')};
  transition: opacity 0.2s ease-in-out, visibility 0.2s ease-in-out, transform 0.2s ease-in-out;
`;
const LanguageDropdownItem = styled.li`
  padding: 10px 15px;
  cursor: pointer;
  display: flex;
  align-items: center;
  color: #000;
  font-size: 14px;
  font-weight: 400;
  font-family: ${({ theme }) => theme.fonts.main};
  &:hover, &:focus {
    background-color: #333;
    color: #fff;
    outline: none;
  }
  .lang-flag { margin-right: 8px; font-size: 1.1em; }
  .lang-text { flex-grow: 1; }
`;

const LanguageSelector = () => {
  const { i18n } = useTranslation(); // <-- Użyj hooka do pobrania instancji i18n
  const [isOpen, setIsOpen] = useState(false);
  const buttonRef = useRef(null);
  const dropdownRef = useRef(null);

  const languages = useMemo(() => [
    { code: 'en', name: 'English', flag: '🇬🇧' },
    { code: 'de', name: 'Deutsch', flag: '🇩🇪' },
  ], []);

  // Funkcja do zmiany języka
  const handleSelectLanguage = (langCode) => {
    i18n.changeLanguage(langCode);
    setIsOpen(false);
    buttonRef.current?.focus();
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target) &&
          buttonRef.current && !buttonRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    if (isOpen) document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isOpen]);

  const currentLangDetails = languages.find(lang => lang.code === i18n.language) || languages[0];

  return (
    <SelectorContainer>
      <LanguageSelectorStyled>
        <LanguageSelectorButton ref={buttonRef} onClick={() => setIsOpen(prev => !prev)} aria-haspopup="listbox" aria-expanded={isOpen}>
          <CurrentLangFlag>{currentLangDetails.flag}</CurrentLangFlag>
          <CurrentLangText>{currentLangDetails.name}</CurrentLangText>
          <DropdownArrow $isExpanded={isOpen} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="18px" height="18px"><path d="M7 10l5 5 5-5H7z"/></DropdownArrow>
        </LanguageSelectorButton>
        <LanguageDropdownList ref={dropdownRef} role="listbox" aria-hidden={!isOpen} $isHidden={!isOpen}>
          {languages.map(lang => (
            <LanguageDropdownItem key={lang.code} role="option" tabIndex={isOpen ? 0 : -1} onClick={() => handleSelectLanguage(lang.code)}>
              <span className="lang-flag">{lang.flag}</span>
              <span className="lang-text">{lang.name}</span>
            </LanguageDropdownItem>
          ))}
        </LanguageDropdownList>
      </LanguageSelectorStyled>
    </SelectorContainer>
  );
};

export default LanguageSelector;