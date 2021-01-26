import React, { useState } from 'react';
// Styles
import GlobalStyles from '../styles/global';
import { ThemeProvider } from 'styled-components';
import lightMode, { darkMode } from '../styles/themeContext';
// Components
import Layout from '../components/Layout';
// Hook
import { useDarkMode } from '../hooks/useDarkMode';

const App = () => {
  const [theme, bg, toggleTheme] = useDarkMode();

  return (
    <ThemeProvider theme={theme === 'light' ? lightMode : darkMode}>
      <GlobalStyles />
      <Layout bg={bg} theme={theme} toggleTheme={toggleTheme} />
    </ThemeProvider>
  );
};

export default App;
