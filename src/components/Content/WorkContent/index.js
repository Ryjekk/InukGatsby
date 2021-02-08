import React, { useContext } from 'react';
import Columns from '../../Columns';
import { Inner } from '../../../styles/styles';
import { GlobalStateContext } from '../../../context/DataContext';

const WorkContent = () => {
  const url = window.location.pathname;
  const { workplacePage } = useContext(GlobalStateContext);
  const workplaceData = workplacePage.find((el) => el.name === url);

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
          headingContent={workplaceData.header_main}
          leftContent={workplaceData.paragraph_main_one}
          leftContentTwo={workplaceData.paragraph_main_two}
        />
      </Inner>
      <Inner>
        <img src={workplaceData.img_me} alt="img me" />
      </Inner>
      <Inner style={themeColors}>
        <Columns
          boxSizeProject
          headingContent={workplaceData.header_goal}
          leftContent={workplaceData.paragraph_goal_one}
          leftContentTwo={workplaceData.paragraph_goal_two}
        />
      </Inner>
      <Inner style={themeColors}>
        <Columns
          headingContent={workplaceData.header_challenges}
          stackPerk={workplaceData.stack_badges}
          rightContent={workplaceData.paragraph_challenges_one}
          rightContentTwo={workplaceData.paragraph_challenges_two}
        />
      </Inner>
      <Inner>
        <img src={workplaceData.img_interiors} alt="img interiors" />
      </Inner>
      <Inner style={themeColors}>
        <Columns
          boxSizeProject
          headingContent={workplaceData.header_contribution}
          leftContent={workplaceData.paragraph_contribution_one}
        />
      </Inner>
      <Inner style={themeColors}>
        <Columns
          headingContent={workplaceData.header_overview}
          centerContent={workplaceData.paragraph_overview}
        />
      </Inner>
    </>
  );
};

export default WorkContent;
