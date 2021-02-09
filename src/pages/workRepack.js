import React from 'react';
// Context
import { useDarkMode } from '../hooks/useDarkMode';
// Styles
import { ThemeProvider } from 'styled-components';
import lightMode, { darkMode } from '../styles/themeContext';
import GlobalStyles from '../styles/global';
// Components
import Layout from '../components/Layout';

const WorkRepack = () => {
  const [theme, bg, toggleTheme] = useDarkMode();
  return (
    <ThemeProvider theme={theme === 'light' ? lightMode : darkMode}>
      <GlobalStyles />
      <Layout
        bg={bg}
        theme={theme}
        toggleTheme={toggleTheme}
        contentType="work"
        name="/workRepack"
      />
    </ThemeProvider>
  );
};

export default WorkRepack;
