import React, { useContext } from 'react';
// Style
import { SwitchBtn } from './styles';
// Assets
import lightIcon from '../../../images/icons/themeSwitchers/light-mode.svg';
import darkIcon from '../../../images/icons/themeSwitchers/dark-mode.svg';
// Context
import {
  GlobalStateContext,
  GlobalDispatchContext
} from '../../../context/DataContext';

const Switcher = () => {
  const { theme } = useContext(GlobalStateContext);
  const dispatch = useContext(GlobalDispatchContext);

  return (
    <SwitchBtn
      onClick={() => {
        dispatch({ type: 'TOGGLE_THEME' });
      }}
    >
      {theme === 'light' ? (
        <img src={darkIcon} alt="darkMode" />
      ) : (
        <img src={lightIcon} alt="lightMode" />
      )}
    </SwitchBtn>
  );
};

export default Switcher;
