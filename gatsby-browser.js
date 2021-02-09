import React from 'react';
const DataContextProvider = require('./src/context/DataContext').default;

const wrapRootElement = ({ element }) => (
  <DataContextProvider>{element}</DataContextProvider>
);

export { wrapRootElement };
