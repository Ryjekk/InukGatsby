import React from 'react';
// Styles
import { ColumnsWrapper, LeftContent, RightContent } from '../Columns/styles';
import Card from './Card';
import { WrapperMain } from '../../styles/styles';

const Cards = () => {
  return (
    <WrapperMain>
      <ColumnsWrapper>
        <LeftContent style={{ alignSelf: 'flex-start' }}>
          left 1
          <Card
            title="placeholder title"
            desc="placeholder desc"
            link="link To"
            image="image"
          />
        </LeftContent>
        <RightContent style={{ alignSelf: 'flex-start' }}>
          Right 1
          <Card
            title="placeholder title"
            desc="placeholder desc"
            link="link To"
            image="image"
          />
        </RightContent>
      </ColumnsWrapper>
    </WrapperMain>
  );
};

export default Cards;
