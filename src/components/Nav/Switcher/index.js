import React from 'react';
// Style
import { SwitchBtn } from './styles';
// Assets
import lightIcon from '../../../images/icons/other/light-mode.svg';
import darkIcon from '../../../images/icons/other/dark-mode.svg';

const Switcher = ({ toggleTheme, theme }) => {
  return (
    <SwitchBtn onClick={toggleTheme}>
      {theme === 'light' ? (
        <img src={darkIcon} alt="darkMode" />
      ) : (
        <img src={lightIcon} alt="lightMode" />
      )}
    </SwitchBtn>
  );
};

export default Switcher;
