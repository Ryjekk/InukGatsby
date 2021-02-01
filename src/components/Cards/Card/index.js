import React from 'react';
import { Link } from 'gatsby';
// Styles
import { LocalLink } from '../../../styles/styles';
import { WrapperContentCard } from './styles';

const Card = ({ title, desc, link, image }) => {
  return (
    <WrapperContentCard>
      {image}
      {title}
      {desc}
      {link}
      <Link to={link}>
        <LocalLink>
          View Project <span>&#8250;</span>
        </LocalLink>
      </Link>
    </WrapperContentCard>
  );
};

export default Card;
