import React from 'react';
const DataContextProvider = require('../context/DataContext').default;

const App = ({ element }) => {
  return <DataContextProvider>{element}</DataContextProvider>;
};

export default App;

// import React from 'react';
// import { useDarkMode } from '../hooks/useDarkMode';
// import lightMode, { darkMode } from '../styles/themeContext';
// import GlobalStyles from '../styles/global';
// import { ThemeProvider } from 'styled-components';
// const DataContextProvider = require('../context/DataContext').default;
//
// const ForwardProvider = ({ element }) => {
//   const [theme] = useDarkMode();
//   return (
//     <DataContextProvider>
//       <ThemeProvider theme={theme === 'light' ? lightMode : darkMode}>
//         <GlobalStyles />
//         {element}
//       </ThemeProvider>
//     </DataContextProvider>
//   );
// };
//
// const App = ({ element }) => {
//   return <ForwardProvider element={element} />;
// };
//
// export default App;
