import React, { useContext } from 'react';
// Styles
import { ColumnsWrapper, LeftContent, RightContent } from '../Columns/styles';
import Card from './Card';
import { WrapperMain } from '../../styles/styles';
// Context
import { GlobalStateContext } from '../../context/DataContext';

const Cards = ({ type }) => {
  const { projectsCard, workplace } = useContext(GlobalStateContext);

  // Todo fix this more modular
  const projectCardLeft = projectsCard.map((el, i) => {
    if (i % 2 === 0) {
      return (
        <Card
          key={i}
          title={el.header_main}
          desc={el.desc}
          link={el.link}
          image={el.img}
        />
      );
    }
  });

  const projectCardRight = projectsCard.map((el, i) => {
    if (i % 2 !== 0) {
      return (
        <Card
          key={i}
          title={el.header_main}
          desc={el.desc}
          link={el.link}
          image={el.img}
        />
      );
    }
  });

  const workCardLeft = workplace.map((el, i) => {
    if (i % 2 === 0) {
      return (
        <Card
          key={i}
          title={el.header_main}
          desc={el.desc}
          link={el.link}
          image={el.img}
        />
      );
    }
  });

  const workCardRight = workplace.map((el, i) => {
    if (i % 2 !== 0) {
      return (
        <Card
          key={i}
          title={el.header_main}
          desc={el.desc}
          link={el.link}
          image={el.img}
        />
      );
    }
  });
  return (
    <WrapperMain>
      <ColumnsWrapper>
        <LeftContent>
          {type === 'project' ? projectCardLeft : workCardLeft}
        </LeftContent>
        <RightContent>
          {type === 'project' ? projectCardRight : workCardRight}
        </RightContent>
      </ColumnsWrapper>
    </WrapperMain>
  );
};

export default Cards;
