import styled from 'styled-components';
import QUERIES from '../../../styles/styles';

export const SwitchBtn = styled.button`
  position: relative;
  z-index: -1;
  width: 45px;
  height: 45px;
  border-radius: 100px;
  transform: scale(0.7);
  display: block;
  box-shadow: ${({ theme }) => theme.shadow};
  transition: transform 0.2s ease-in-out;
  background-color: white;

  @media (${QUERIES.large}) {
    transform: scale(1);
  }
`;
