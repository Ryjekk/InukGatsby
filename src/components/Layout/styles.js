import styled from 'styled-components';

export const BgTheme = styled.div`
  position: absolute;
  display: block;
  top: 20px;
  z-index: -5;
  //background-color: #121212;
  background-color: ${({ theme }) => theme.main};
  width: 400vmax;
  height: 400vmax;
  top: calc(-250vmax + 3rem);
  right: calc(-250vmax + 3rem);
  border-radius: 100%;
`;
