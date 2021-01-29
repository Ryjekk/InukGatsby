import React from 'react';
import { ColumnsWrapper, LeftContent, RightContent } from './styles';
import { Heading, Paragraph } from '../../styles/styles';

const Columns = ({ leftContent, rightContent, headingContent }) => {
  return (
    <ColumnsWrapper style={{ alignItems: 'start' }}>
      {headingContent ? <Heading>{headingContent}</Heading> : ''}
      <LeftContent>
        <Paragraph style={{ fontSize: 16, paddingRight: '50px' }}>
          {leftContent}
        </Paragraph>
      </LeftContent>
      <RightContent>
        <Paragraph style={{ fontSize: 16 }}>{rightContent}</Paragraph>
      </RightContent>
    </ColumnsWrapper>
  );
};

export default Columns;
