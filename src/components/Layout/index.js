import React from 'react';
// Styles
import { Main } from '../../styles/styles';
import { BgTheme } from './styles';
// Components
import Nav from '../Nav';

const Layout = ({ toggleTheme, theme, bg }) => {
  return (
    <Main style={{ position: 'relative' }}>
      <BgTheme
        className={
          bg === 'first' ? 'growBlack' : bg === 'second' ? 'growWhite' : ''
        }
      />
      <Nav theme={theme} toggleTheme={toggleTheme} />
    </Main>
  );
};

export default Layout;
