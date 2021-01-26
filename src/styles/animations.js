import { keyframes } from 'styled-components';

export const bgBlackAnimation = keyframes`
0%{
    width: 0;
    height: 0;
    top: 0px;
    right: 0px;
    background-color: #121212;
}
100%{
    width: 400vmax;
    height: 400vmax;
    top: calc(-250vmax + 3rem);
    right: calc(-250vmax + 3rem);
    background-color: #121212;
}`;

export const bgWhiteAnimation = keyframes`
  0%{
    background-color: #eee;
    width: 0;
    height: 0;
    top: 0px;
    right: 0px;
  }
  100%{
    background-color: #eee;
    width: 400vmax;
    height: 400vmax;
    top: calc(-250vmax + 3rem);
    right: calc(-250vmax + 3rem);
  }
`;
