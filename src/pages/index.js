import React from 'react';
// Styles
import GlobalStyles from '../styles/global';
import { ThemeProvider } from 'styled-components';
import lightMode, { darkMode } from '../styles/themeContext';
// Components
import Layout from '../components/Layout';
// Hook
import { useDarkMode } from '../hooks/useDarkMode';
import DataContextProvider from '../context/DataContext';

const App = () => {
  const [theme, bg, toggleTheme] = useDarkMode();
  return (
    <DataContextProvider>
      <ThemeProvider theme={theme === 'light' ? lightMode : darkMode}>
        <GlobalStyles />
        <Layout bg={bg} theme={theme} toggleTheme={toggleTheme} />
      </ThemeProvider>
    </DataContextProvider>
  );
};

export default App;
