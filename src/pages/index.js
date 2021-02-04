import React, { useContext } from 'react';
// Styles
import GlobalStyles from '../styles/global';
import { ThemeProvider } from 'styled-components';
import lightMode, { darkMode } from '../styles/themeContext';
// Components
import Layout from '../components/Layout';
// Hook
// import { useDarkMode } from '../hooks/useDarkMode';
// Context
import DataContextProvider, {
  GlobalStateContext
} from '../context/DataContext';

const App = () => {
  // const [theme, bg, toggleTheme] = useDarkMode();
  const { theme } = useContext(GlobalStateContext);

  return (
    <DataContextProvider>
      <ThemeProvider theme={theme === 'light' ? lightMode : darkMode}>
        <GlobalStyles />
        <Layout />
      </ThemeProvider>
    </DataContextProvider>
  );
};

export default App;
