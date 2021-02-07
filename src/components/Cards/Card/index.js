import React from 'react';
import { Link } from 'gatsby';
// Styles
import { LocalLink, Paragraph, SubheadingDumb } from '../../../styles/styles';
import { ProjImage, WrapperContentCard } from './styles';

// TODO add stack pills
const Card = ({ title, desc, link, linkText, image }) => {
  return (
    <WrapperContentCard>
      <Link to={link} style={{ width: '100%' }}>
        <ProjImage
          style={{
            backgroundImage: `url(${image})`
          }}
        />
        <SubheadingDumb>{title}</SubheadingDumb>
        <Paragraph style={{ fontSize: 16 }}>{desc}</Paragraph>
        <LocalLink>
          {linkText} <span>&#8250;</span>
        </LocalLink>
      </Link>
    </WrapperContentCard>
  );
};

export default Card;
