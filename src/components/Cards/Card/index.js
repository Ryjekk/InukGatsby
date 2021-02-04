import React from 'react';
import { Link } from 'gatsby';
// Styles
import { LocalLink, Paragraph, Subheading } from '../../../styles/styles';
import { ProjImage, WrapperContentCard } from './styles';

const Card = ({ title, desc, link, image }) => {
  return (
    // TODO plug swift image
    <WrapperContentCard>
      <Link to={link} style={{ width: '100%' }}>
        <ProjImage style={{ backgroundImage: `url(${image})` }} />
        <Subheading>{title}</Subheading>
        <Paragraph style={{ fontSize: 16 }}>{desc}</Paragraph>
        <LocalLink>
          View Project <span>&#8250;</span>
        </LocalLink>
      </Link>
    </WrapperContentCard>
  );
};

export default Card;
