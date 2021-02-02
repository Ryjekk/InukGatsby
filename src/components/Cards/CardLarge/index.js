import React from 'react';
// Assets
import bg2 from '../../../images/projects/Aura/pic_desktop_three.png';
// Components
import {
  Image,
  LocalLink,
  Paragraph,
  Subheading,
  WrapperContent
} from '../../../styles/styles';
import { BoxCol } from '../../Skills/Skill/styles';

const CardLarge = ({ title, desc, image }) => {
  return (
    // TODO plug swift image
    <WrapperContent>
      <Image style={{ backgroundImage: `url(${bg2})` }} />
      <BoxCol style={{ margin: '16px auto' }}>
        <Subheading>{title}</Subheading>
        <Paragraph style={{ fontSize: 16 }}>{desc}</Paragraph>
        <LocalLink>Coming Soon</LocalLink>
      </BoxCol>
    </WrapperContent>
  );
};

export default CardLarge;
