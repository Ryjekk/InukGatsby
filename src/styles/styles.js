import styled from 'styled-components';
import { bgBlackAnimation, bgWhiteAnimation } from './animations';

const QUERIES = {
  large: `min-width: 1200px`,
  medium: `min-width: 870px`,
  small: `min-width: 660px`,
  maxWidth: `1500px`
};

// Text
export const Heading = styled.h1`
  font-size: 30px;
  line-height: 129.69%;
  font-weight: 600;
  margin: 0 auto;
  width: 100%;
  color: ${({ theme }) => theme.textMain};
  user-select: none;

  @media (${QUERIES.large}) {
    font-size: 60px;
  }
`;

export const Paragraph = styled.p`
  font-size: 16px;
  line-height: 184.69%;
  letter-spacing: 0.03em;
  font-weight: 400;
  color: ${({ theme }) => theme.textLight};
`;

export const Subheading = styled.p`
  font-size: 24px;
  letter-spacing: 4px;
  border-bottom: 1px solid ${({ theme }) => theme.secondary};
  color: ${({ theme }) => theme.secondary};
  display: inline;
`;

// Boxes
export const Main = styled.main`
  width: 100%;
  height: 100%;
  background-color: ${({ theme }) => theme.main};
  overflow: hidden;

  > .growBlack {
    animation: ${bgBlackAnimation} 2s forwards;
  }

  > .growWhite {
    animation: ${bgWhiteAnimation} 2s forwards;
  }
`;

export const Full = styled.main`
  width: 100%;
  height: 100%;
  padding: 0px;
  max-width: 1500px;
  margin: 0 auto;

  @media (${QUERIES.large}) {
    padding: 30px;
  }
`;

export const Inner = styled.div`
  max-width: 1437px;
  width: 100%;
  height: auto;
  margin: 0 auto;
  padding: 30px;

  display: flex;
  flex-direction: column;

  > * {
    width: 100%;
  }
`;

export const Mid = styled.div`
  width: 100%;
  height: auto;
  margin: 70px auto 70px auto;
  padding: 30px;
  max-width: 1090px;

  @media (${QUERIES.large}) {
    margin: 220px auto 220px auto;
    padding: 0px;
  }
`;

export const WrapperMain = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 50px;
`;

export const WrapperContent = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  padding: 16px 0;

  ${Paragraph} {
    font-size: 14px;
    padding: 16px 0;
    color: ${({ theme }) => theme.textLight};
  }
`;

export const LocalLink = styled.p`
  font-size: 20px;
  display: inline-block;
  border-bottom: 3px solid transparent;
  transition: all 0.3s ease-in-out;
  :hover {
    border-bottom: 3px solid ${({ theme }) => theme.textMain};
  }
`;

// Other
export const Image = styled.div`
  width: 100%;
  height: 500px;
  border-radius: 0px;
  background-position: center center;
  background-size: cover;

  @media (${QUERIES.large}) {
    border-radius: 6px;
  }
`;

export default QUERIES;
