import React from 'react';
// Style
import { Inner } from '../../styles/styles';
import { NavContent } from './styles';
// Components
import Switcher from './Switcher';
import Logo from './Logo';

const Nav = ({ toggleTheme, theme }) => {
  return (
    <Inner
      style={{
        mixBlendMode: 'difference'
      }}
    >
      <NavContent
        style={{
          mixBlendMode: 'difference'
        }}
      >
        <Logo
          style={{
            position: 'relative',
            display: 'block',
            zIndex: 2
          }}
        />
        <Switcher theme={theme} toggleTheme={toggleTheme} />
      </NavContent>
    </Inner>
  );
};

export default Nav;
