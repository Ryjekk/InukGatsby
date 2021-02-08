import React from 'react';
// Styles
import {
  CenterContent,
  ColumnsWrapper,
  LeftContent,
  PerkWrapper,
  RightContent
} from './styles';
import { BorderSpan, Heading, Paragraph } from '../../styles/styles';
import { perkCreator } from '../../utils/skillsIcons';

const Columns = ({
  // Main props
  leftContent,
  rightContent,
  headingContent,
  // Project props
  styleProject,
  boxSizeProject,
  leftContentTwo,
  rightContentTwo,
  centerContent,
  stackPerk
}) => {
  const heading = headingContent ? (
    <Heading
      style={{ color: 'white' }}
      className={
        styleProject
          ? 'projectFont'
          : centerContent
          ? 'projectHeaderCenter'
          : rightContentTwo
          ? 'projectHeaderEnd'
          : ''
      }
    >
      <BorderSpan>{headingContent}</BorderSpan>
    </Heading>
  ) : null;

  let perk = [];
  if (stackPerk !== undefined) {
    perk = perkCreator(stackPerk);
  }

  return (
    <ColumnsWrapper style={{ alignItems: 'start' }}>
      {heading}
      <LeftContent className={boxSizeProject ? 'boxSizeProject' : ''}>
        <Paragraph>{leftContent}</Paragraph>
        <Paragraph style={{ marginTop: '30px' }}>{leftContentTwo}</Paragraph>
        {perk ? <PerkWrapper>{perk}</PerkWrapper> : null}
      </LeftContent>
      <RightContent>
        <Paragraph>{rightContent}</Paragraph>
        <Paragraph style={{ marginTop: '30px' }}>{rightContentTwo}</Paragraph>
      </RightContent>
      <CenterContent>
        <Paragraph>{centerContent}</Paragraph>
      </CenterContent>
    </ColumnsWrapper>
  );
};

export default Columns;
