import React from 'react';
// Styles
import { WrapperContent } from '../../../styles/styles';
// Utils
import { perkCreator } from '../../../utils/skillsIcons';

const Skill = ({ desc }) => {
  const perk = perkCreator(desc);
  return (
    <WrapperContent style={{ maxWidth: '550px', paddingRight: '50px' }}>
      {perk}
    </WrapperContent>
  );
};

export default Skill;
