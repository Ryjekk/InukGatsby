const React = require('react');
const DataContextProvider = require('./src/context/DataContext').default;
// const { DataContextProvider } = require('./src/context/DataContext');

exports.wrapRootElement = ({ element }) => {
  return <DataContextProvider>{element}</DataContextProvider>;
};
