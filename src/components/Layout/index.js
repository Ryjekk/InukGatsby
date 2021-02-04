import React, { useContext } from 'react';
// Styles
import { Main } from '../../styles/styles';
import { BgTheme } from './styles';
// Components
import Nav from '../Nav';
import ProjectContent from '../Content/ProjectContent';
import WorkContent from '../Content/WorkContent';
import Content from '../Content';
import Footer from '../Footer';
// Context
import { GlobalStateContext } from '../../context/DataContext';

const Layout = ({ contentType }) => {
  const { bg } = useContext(GlobalStateContext);
  console.log(bg);
  return (
    <Main style={{ position: 'relative' }}>
      <BgTheme
        className={
          bg === 'first' ? 'growBlack' : bg === 'second' ? 'growWhite' : ''
        }
      />
      <Nav />
      {contentType === 'project' ? (
        <ProjectContent />
      ) : contentType === 'work' ? (
        <WorkContent />
      ) : (
        <Content
          style={
            {
              // zIndex: 20,
              // display: 'block',
              // position: 'relative',
              // mixBlendMode: 'difference'
            }
          }
        />
      )}
      <Footer />
    </Main>
  );
};

export default Layout;
