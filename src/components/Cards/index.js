import React from 'react';
// Styles
import { ColumnsWrapper, LeftContent, RightContent } from '../Columns/styles';
import Card from './Card';
import { WrapperMain } from '../../styles/styles';

const Cards = () => {
  return (
    <WrapperMain>
      <ColumnsWrapper>
        <LeftContent>
          <Card
            title="AuraTattoo"
            desc="Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem"
            link="link To"
            image="Aura"
          />
        </LeftContent>
        <RightContent>
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
