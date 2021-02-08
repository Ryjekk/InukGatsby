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

  .projectFont {
    font-size: 40px;

    @media (${QUERIES.large}) {
      font-size: 90px;
    }
  }

  .projectHeaderEnd {
    @media (${QUERIES.large}) {
      text-align: right;
    }
  }

  .projectHeaderCenter {
    @media (${QUERIES.large}) {
      text-align: center;
    }
  }

  .boxSizeProject {
    @media (${QUERIES.large}) {
      width: 65%;
    }
  }
`;

export const RightContent = styled.div`
  width: 100%;
  align-self: flex-start;

  @media (${QUERIES.large}) {
    width: 50%;
    padding-left: 50px;
  }
`;

export const LeftContent = styled.div`
  width: 100%;
  padding-bottom: 20px;
  align-self: flex-start;

  @media (${QUERIES.large}) {
    padding-bottom: 0;
    padding-right: 50px;
    width: 50%;
  }
`;

export const PerkWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

export const CenterContent = styled.div`
  @media (${QUERIES.large}) {
    width: 70%;
    margin: 0 auto;
  }
`;
