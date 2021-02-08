import React, { useContext } from 'react';
// Context
import { GlobalStateContext } from '../../../context/DataContext';
// Styles
import { Inner } from '../../../styles/styles';
// Components
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
      <Inner style={{ margin: '60px auto' }}>
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
      <Inner style={{ margin: '60px auto' }}>
        <img src={projectData.img_project_overall} alt="img project overall" />
      </Inner>
      <Inner style={themeColors}>
        <Columns
          headingContent={projectData.header_problems}
          centerContent={projectData.paragraph_problems}
        />
      </Inner>
      <Inner style={{ margin: '60px auto' }}>
        <img src={projectData.img_project_two} alt="img project two" />
      </Inner>
      <Inner style={themeColors}>
        <Columns
          boxSizeProject
          headingContent={projectData.header_lesson}
          leftContent={projectData.paragraph_lesson}
        />
      </Inner>
    </>
  );
};

export default ProjectContent;
