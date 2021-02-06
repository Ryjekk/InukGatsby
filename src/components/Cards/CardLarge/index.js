import React, { useContext } from 'react';
// Components
import {
  Image,
  LocalLink,
  Paragraph,
  Subheading,
  WrapperContent
} from '../../../styles/styles';
import { BoxCol } from '../../Skills/Skill/styles';
import { Link } from 'gatsby';

const CardLarge = ({ title, desc, linkText, link, image }) => {
  return (
    <WrapperContent>
      <Link to={link} style={{ width: '100%' }}>
        <Image style={{ backgroundImage: `url(${image})` }} />
        <BoxCol style={{ margin: '16px auto' }}>
          <Subheading>{title}</Subheading>
          <Paragraph style={{ fontSize: 16 }}>{desc}</Paragraph>
          <LocalLink>{linkText}</LocalLink>
        </BoxCol>
      </Link>
    </WrapperContent>
  );
};

export default CardLarge;
