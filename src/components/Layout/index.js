import React from 'react';
// Styles
import { Main } from '../../styles/styles';
import { BgTheme } from './styles';
// Components
import Nav from '../Nav';
import ProjectContent from '../Content/ProjectContent';
import WorkContent from '../Content/WorkContent';
import Content from '../Content';

const Layout = ({ toggleTheme, theme, bg, contentType }) => {
  return (
    <Main style={{ position: 'relative' }}>
      <BgTheme
        className={
          bg === 'first' ? 'growBlack' : bg === 'second' ? 'growWhite' : ''
        }
      />
      <Nav theme={theme} toggleTheme={toggleTheme} />
      {contentType === 'project' ? (
        <ProjectContent />
      ) : contentType === 'work' ? (
        <WorkContent />
      ) : (
        <Content />
      )}
    </Main>
  );
};

export default Layout;