import styled from 'styled-components';
import QUERIES, { Heading } from '../../styles/styles';

export const ColumnsWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;

  ${Heading} {
    font-weight: 900;
    font-size: 30px;
    letter-spacing: 4px;
    margin: 0;
    line-height: 1.1em;
    padding: 0 0 40px 0;
    color: ${({ theme }) => theme.textMain};

    @media (${QUERIES.large}) {
      padding: 0 0 50px 0;
      font-size: 40px;
    }
  }
`;

export const RightContent = styled.div`
  width: 100%;

  @media (${QUERIES.large}) {
    width: 50%;
  }
`;

export const LeftContent = styled.div`
  width: 100%;
  padding-bottom: 20px;

  @media (${QUERIES.large}) {
    width: 50%;
  }
`;
