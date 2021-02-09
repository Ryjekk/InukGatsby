const React = require('react');
const DataContextProvider = require('./src/context/DataContext').default;

exports.wrapRootElement = ({ element }) => {
  return <DataContextProvider>{element}</DataContextProvider>;
};
