import React from 'react';
// Styles
import { HeadingSkills } from './styles';
import { ColumnsWrapper, LeftContent, RightContent } from '../Columns/styles';
// Components
import Skill from './Skill';
import { WrapperMain } from '../../styles/styles';

// TODO missing pug moustache, handlebars, chai, mongoose

const Skills = ({ theme, skills }) => {
  const { core, frontend, backend, styling, databases, tools } = skills;
  const headers = Object.keys(skills);

  return (
    <WrapperMain>
      <ColumnsWrapper>
        <LeftContent>
          <HeadingSkills>{headers[0]}</HeadingSkills>
          <Skill desc={core} />
          <HeadingSkills>{headers[4]}</HeadingSkills>
          <Skill desc={databases} theme={theme} />
          <HeadingSkills>{headers[5]}</HeadingSkills>
          <Skill desc={tools} />
        </LeftContent>
        <RightContent>
          <HeadingSkills>{headers[2]}</HeadingSkills>
          <Skill desc={backend} />
          <HeadingSkills>{headers[1]}</HeadingSkills>
          <Skill desc={frontend} />
          <HeadingSkills>{headers[3]}</HeadingSkills>
          <Skill desc={styling} />
        </RightContent>
      </ColumnsWrapper>
    </WrapperMain>
  );
};

export default Skills;
