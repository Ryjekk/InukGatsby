import React from 'react';
// Styles
import GlobalStyles from '../styles/global';
import { ThemeProvider } from 'styled-components';
import lightMode, { darkMode } from '../styles/themeContext';
// Components
import Layout from '../components/Layout';
import Seo from '../components/Seo';
// Hook
import { useDarkMode } from '../hooks/useDarkMode';

const App = () => {
  const [theme, bg, toggleTheme] = useDarkMode();
  return (
    <ThemeProvider theme={theme === 'light' ? lightMode : darkMode}>
      <GlobalStyles />
      <Seo />
      <Layout bg={bg} theme={theme} toggleTheme={toggleTheme} />
    </ThemeProvider>
  );
};

export default App;
