import * as React from 'react';
// Styles
import GlobalStyles from '../styles/styles';
import { ThemeProvider } from 'styled-components';
import { darkMode, lightMode } from '../styles/themeContext';

const App = () => {
    return (
        <ThemeProvider theme={darkMode}>
            <GlobalStyles />
            hello
        </ThemeProvider>
    );
};

export default App;
