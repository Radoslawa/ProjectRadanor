import React, { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';
import { useTranslation } from 'react-i18next';

const SearchContainer = styled.div`
 
  max-width: ${({ $isOpen }) => ($isOpen ? '250px' : '0')}; 
  opacity: ${({ $isOpen }) => ($isOpen ? '1' : '0')};
  overflow: hidden; 
  transition: max-width 0.3s ease-in-out, opacity 0.3s ease-in-out;
  display: flex; 
  align-items: center;
  flex-shrink: 0; 
  height: 44px; 
  margin-right: ${({ $isOpen }) => ($isOpen ? '0.8em' : '0')}; 
`;

const SearchForm = styled.form`
  display: flex;
  align-items: center;
  background-color: #fff;
  border-radius: 25px;
  padding: 5px;
  box-shadow: 0 4px 15px rgba(0,0,0,0.15);
  width: 100%; 
  height: 100%;
`;

const SearchInput = styled.input`
  border: none;
  outline: none;
  padding: 0.5rem 1rem;
  font-size: 1rem;
  background: transparent;
  flex-grow: 1; 
  min-width: 0; 
  color: #000;
  font-family: inherit;
`;

const SearchButton = styled.button`
  border: none;
  background: #000;
  color: #fff;
  cursor: pointer;
  height: 38px;
  width: 38px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  transition: background-color 0.2s ease;

  &:hover {
    background-color: #333;
  }

  i {
    font-size: 0.9rem;
  }
`;

const SearchBar = ({ isOpen, onSearch, className }) => { 
  const { t } = useTranslation();
  const [query, setQuery] = useState('');
  const inputRef = useRef(null);

  useEffect(() => {
    if (isOpen && inputRef.current) {
      setTimeout(() => inputRef.current.focus(), 100);
    }
  }, [isOpen]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (query.trim()) {
      onSearch(query.trim());
      setQuery('');
    }
  };

  return (
    <SearchContainer $isOpen={isOpen} className={className}> 
      <SearchForm onSubmit={handleSubmit}>
        <SearchInput
          ref={inputRef}
          type="text"
          placeholder={t('search_placeholder', 'Search...')}
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <SearchButton type="submit" aria-label="Submit search">
          <i className="fas fa-arrow-right"></i>
        </SearchButton>
      </SearchForm>
    </SearchContainer>
  );
};

export default SearchBar;