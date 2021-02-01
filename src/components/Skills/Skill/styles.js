import styled from 'styled-components';
import { Paragraph } from '../../../styles/styles';

export const SkillWrapper = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  padding: 16px 0;

  ${Paragraph} {
    font-size: 14px;
    color: ${({ theme }) => theme.textLight};
  }
`;

export const BoxCol = styled.div`
  padding: 12px 12px 12px 5px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
