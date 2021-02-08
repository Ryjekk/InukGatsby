import React, { useContext } from 'react';
import { GlobalStateContext } from '../../../context/DataContext';
import { Inner } from '../../../styles/styles';
import Columns from '../../Columns';
import Table from '../../Table';

const ProjectContent = () => {
  const url = window.location.pathname;
  const { projectsPage } = useContext(GlobalStateContext);
  const projectData = projectsPage.find((el) => el.name === url);

  const themeColors = {
    margin: '50px auto 0 auto',
    mixBlendMode: 'difference',
    color: 'white'
  };

  return (
    <>
      <Inner style={themeColors}>
        <Columns
          styleProject
          boxSizeProject
          headingContent={projectData.header_main}
          leftContent={projectData.paragraph}
        />
      </Inner>
      <Inner>
        <Table table={projectData.table} />
      </Inner>
      <Inner>
        <img src={projectData.img_project_one} alt="img project one" />
      </Inner>
      <Inner style={themeColors}>
        <Columns
          boxSizeProject
          headingContent={projectData.header_goal}
          leftContent={projectData.paragraph_goal_one}
          leftContentTwo={projectData.paragraph_goal_two}
        />
      </Inner>
      <Inner style={themeColors}>
        <Columns
          headingContent={projectData.header_explanation}
          stackPerk={projectData.stack_badges}
          rightContent={projectData.paragraph_explanation_one}
          rightContentTwo={projectData.paragraph_explanation_two}
        />
      </Inner>
    </>
  );
};

export default ProjectContent;
