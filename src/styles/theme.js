// src/styles/theme.js
export const theme = {
  colors: {
    primary: '#0a0a0a',       // Główne tło (ciemne)
    secondary: '#121212',     // Drugorzędny kolor tła/akcent
    text: '#ffffff',           // Główny kolor tekstu
    textLight: '#f0f0f0',     // Jaśniejszy tekst, subtelny
    accent: '#E0E0E0',         // Kolor akcentu, np. dla niektórych kontrolek lub hoverów
    black: '#000000',
    white: '#ffffff',
    grey: '#A0A0A0',         // Szary
    dark: '#121212',       
    // Możesz dodać więcej kolorów specyficznych dla Twojego projektu
    // np. error: '#ff4d4f', success: '#52c41a'
  },
  fonts: {
    main: '"Oswald", "PP Neue Montreal", sans-serif', 
    special: '"PP Editorial Old", serif', // Dla specjalnych elementów, np. kursywa w H1
  },
  fontSizes: {
    // Użyj jednostek rem dla lepszej dostępności i skalowalności,
    // ale px są też OK, jeśli taka jest konwencja projektu.
    // Poniżej przykłady w px dla spójności z tym co miałaś.
    xsmall: '12px',
    small: '14px',
    medium: '16px', // Podstawowy rozmiar tekstu
    large: '25px',
    xlarge: '24px',
    h1: 'clamp(2.5rem, 8vw, 5rem)', // Responsywny H1 z HeroSection
    h2: '2.5rem', // Przykładowy H2
    h3: '2rem',   // Przykładowy H3
    // ... więcej rozmiarów ...
  },
  spacings: {
    // Odstępy używane dla paddingów, marginesów
    xxsmall: '4px',
    xsmall: '8px',
    small: '12px',
    medium: '16px',
    large: '24px',
    xlarge: '32px',
    xxlarge: '48px',
  },
  breakpoints: {
    // Media query breakpoints
    mobileS: '320px',
    mobileM: '375px',
    mobileL: '425px',
    tabletS: '600px', // Używane np. do ukrycia nav-links
    tablet: '768px',
    laptopS: '900px', // Używane np. dla zmian w sliderze
    laptop: '1024px',
    desktop: '1440px',
  },
  // Możesz dodać inne globalne zmienne stylistyczne, np.
  // borderRadius: '4px',
  // transition: 'all 0.3s ease-in-out',
};

// Możesz też zdefiniować funkcje pomocnicze, np. do media queries:
// export const media = Object.keys(theme.breakpoints).reduce((acc, label) => {
//   acc[label] = (...args) => css`
//     @media (max-width: ${theme.breakpoints[label]}) {
//       ${css(...args)}
//     }
//   `;
//   return acc;
// }, {});