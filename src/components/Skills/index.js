import React from 'react';
// Styles
import { HeadingSkills } from './styles';
import { ColumnsWrapper, LeftContent, RightContent } from '../Columns/styles';
// Components
import Skill from './Skill';
import { WrapperMain } from '../../styles/styles';

// TODO missing pug moustache, handlebars, chai, mongoose

const Skills = ({ theme }) => {
  const core = ['Html5', 'Css3', 'Javascript'];
  const front = [
    'ReactLogo',
    'Redux',
    'NextDotJs',
    'Gatsby',
    'Vuejs',
    'Vuetify',
    'NuxtDotJs',
    'Jquery'
  ];
  const back = ['Nodejs', 'Express', 'Graphql'];
  const styling = [
    'Sass',
    'StyledComponents',
    'MaterialUi',
    'Tailwindcss',
    'Bootstrap'
  ];
  const database = ['Mongodb', 'Postgresql', 'FaunaDB'];
  const tools = [
    'Git',
    'Github',
    'Mocha',
    'Jest',
    'Docker',
    'Webpack',
    'Firebase',
    'Amazonaws',
    'Netlify',
    'Heroku',
    'Figma',
    'Adobexd'
  ];
  return (
    <WrapperMain>
      <ColumnsWrapper>
        <LeftContent style={{ alignSelf: 'flex-start' }}>
          <HeadingSkills>Core</HeadingSkills>
          <Skill desc={core} />
          <HeadingSkills>Databases</HeadingSkills>
          <Skill desc={database} theme={theme} />
          <HeadingSkills>Tools</HeadingSkills>
          <Skill desc={tools} />
        </LeftContent>
        <RightContent style={{ alignSelf: 'flex-start' }}>
          <HeadingSkills>Backend</HeadingSkills>
          <Skill desc={back} />
          <HeadingSkills>Frontend</HeadingSkills>
          <Skill desc={front} />
          <HeadingSkills>Styling</HeadingSkills>
          <Skill desc={styling} />
        </RightContent>
      </ColumnsWrapper>
    </WrapperMain>
  );
};

export default Skills;
