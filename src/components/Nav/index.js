import React from 'react';
// Style
import { Inner } from '../../styles/styles';
import { NavContent } from './styles';
import Switcher from './Switcher';

const Nav = ({ toggleTheme, theme, spread }) => {
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
        <Switcher spread={spread} theme={theme} toggleTheme={toggleTheme} />
      </NavContent>
    </Inner>
  );
};

export default Nav;
