import styled from 'styled-components';
import QUERIES from '../../../styles/styles';

export const LogoImg = styled.img`
  width: 45px;
  height: 45px;
  transform: scale(0.7);

  @media (${QUERIES.large}) {
    transform: scale(1);
  }
`;
