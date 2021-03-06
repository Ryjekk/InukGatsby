import styled from 'styled-components';
import QUERIES from '../../styles/styles';

export const NavContent = styled.nav`
  width: auto;
  padding: 0;
  margin: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (${QUERIES.large}) {
    margin: 100px 0 0 0;
    padding: 0 60px;
  }
`;
