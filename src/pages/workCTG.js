import React from 'react';
// Context
import { useDarkMode } from '../hooks/useDarkMode';
import DataContextProvider from '../context/DataContext';
// Styles
import { ThemeProvider } from 'styled-components';
import lightMode, { darkMode } from '../styles/themeContext';
import GlobalStyles from '../styles/global';
// Components
import Layout from '../components/Layout';

const WorkCtg = () => {
  const [theme, bg, toggleTheme] = useDarkMode();
  return (
    <DataContextProvider>
      <ThemeProvider theme={theme === 'light' ? lightMode : darkMode}>
        <GlobalStyles />
        <Layout
          bg={bg}
          theme={theme}
          toggleTheme={toggleTheme}
          contentType="work"
        />
      </ThemeProvider>
    </DataContextProvider>
  );
};

export default WorkCtg;
