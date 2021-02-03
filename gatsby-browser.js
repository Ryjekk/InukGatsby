import React from 'react';
import DataContextProvider from './src/context/DataContext';

const wrapRootElement = ({ element }) => (
  <DataContextProvider>{element}</DataContextProvider>
);

export { wrapRootElement };
