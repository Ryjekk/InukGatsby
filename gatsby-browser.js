import React from 'react';
// import DataContextProvider from './src/context/DataContext';
const DataContextProvider = require('./src/context/DataContext').default;

const wrapRootElement = ({ element }) => (
  <DataContextProvider>{element}</DataContextProvider>
);

export { wrapRootElement };
