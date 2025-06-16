// src/main.jsx
import React, { Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import { ThemeProvider } from 'styled-components';
import { theme } from './styles/theme.js';
import GlobalStyles from './styles/GlobalStyles.js';
import './i18n'; // Importuj konfigurację i18next

import './firebase.js';

const root = ReactDOM.createRoot(document.getElementById('root'));

// Komponent fallback, który będzie wyświetlany podczas ładowania tłumaczeń
const Loader = () => (
  <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
    Loading translations...
  </div>
);

root.render(
  <React.StrictMode>
    <Suspense fallback={<Loader />}>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <App />
      </ThemeProvider>
    </Suspense>
  </React.StrictMode>
);
