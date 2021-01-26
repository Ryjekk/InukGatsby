import React from 'react';
// Style
import { LogoWrapper, LogoImg } from './styles';
// Assets
import logoLight from '../../../images/icons/logo/logo_light.png';
import logoDark from '../../../images/icons/logo/logo_dark.png';

const Logo = () => {
  return (
    <LogoWrapper>
      <LogoImg src={logoLight} alt="logoDark" />
    </LogoWrapper>
  );
};

export default Logo;
