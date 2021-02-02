import styled from 'styled-components';
import QUERIES, { WrapperContent } from '../../../styles/styles';

export const WrapperContentCard = styled(WrapperContent)`
  // TODO If you want to have it centered
  //max-width: 700px;
  //margin: 0 auto;
  flex-direction: column;

  @media (${QUERIES.large}) {
    align-items: flex-start;
  }
`;

export const ProjImage = styled.div`
  width: 100%;
  height: 300px;
  border-radius: 4px;
  background-size: cover;
  background-position: 50% 50%;
  margin-bottom: 20px;
`;
