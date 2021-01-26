import React, { useState } from 'react';
// Styles
import GlobalStyles from '../styles/global';
import { ThemeProvider } from 'styled-components';
import lightMode, { darkMode } from '../styles/themeContext';
// Components
import Layout from '../components/Layout';

const App = () => {
  const [theme, setTheme] = useState('dark');
  const [bg, setBg] = useState(false);

  function toggleTheme() {
    if (theme === 'light') {
      setBg('first');
      setTimeout(() => {
        setTheme('dark');
      }, 2000);
    } else {
      setBg('second');
      setTimeout(() => {
        setTheme('light');
      }, 2000);
    }
  }

  return (
    <ThemeProvider theme={theme === 'light' ? lightMode : darkMode}>
      <GlobalStyles />
      <Layout bg={bg} theme={theme} toggleTheme={toggleTheme} />
    </ThemeProvider>
  );
};

export default App;
