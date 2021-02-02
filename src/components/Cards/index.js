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
          <Card
            title="AuraTattoo"
            desc="Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem"
            link="link To"
            image="Aura"
          />
        </LeftContent>
        <RightContent style={{ alignSelf: 'flex-start', paddingLeft: '50px' }}>
          <Card
            title="RePack"
            desc="Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem"
            link="link To"
            image="Repack"
          />
        </RightContent>
      </ColumnsWrapper>
    </WrapperMain>
  );
};

export default Cards;
