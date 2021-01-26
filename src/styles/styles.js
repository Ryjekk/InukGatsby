import styled from 'styled-components';
import { bgBlackAnimation, bgWhiteAnimation } from './animations';

const QUERIES = {
  large: `min-width: 1200px`,
  medium: `min-width: 870px`,
  small: `min-width: 660px`,
  maxWidth: `1500px`
};

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

export default QUERIES;
