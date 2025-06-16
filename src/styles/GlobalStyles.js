// src/styles/GlobalStyles.js
import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  /* Linie @import dla fontów powinny być w index.html, a nie tutaj */

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: "PP Neue Montreal", sans-serif; /* Ten font jest ładowany przez <link> w index.html */
    background-color: ${({ theme }) => theme.colors.primary || '#0a0a0a'};
    color: ${({ theme }) => theme.colors.text || '#fff'};
    overflow-x: hidden; /* Zapobiega poziomemu scrollowi */
    /* overflow-y: auto; Domyślnie pozwól na scroll, Home.jsx będzie zarządzał blokadą dla slidera */
    line-height: 1.4;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  img {
    max-width: 100%;
    height: auto; /* Zachowaj proporcje, chyba że celowo inaczej */
    display: block; /* Usuwa dodatkowe miejsce pod obrazkiem */
  }

  a {
    text-decoration: none;
    color: inherit; /* Domyślnie dziedziczy kolor tekstu rodzica */
  }

  h1, h2, h3, h4, h5, h6 {
    font-weight: 500; // Domyślna waga dla nagłówków, można dostosować w theme.js
    line-height: 1.2;
    margin: 0; // Dodano reset marginesu dla nagłówków
    padding: 0; // Dodano reset paddingu dla nagłówków
  }

  /* Keyframes dla spinnera w Loaderze */
  @keyframes spin {
    to {
      transform: rotate(360deg);
    }
  }
`;

export default GlobalStyles; // <--- TA LINIA JEST KLUCZOWA