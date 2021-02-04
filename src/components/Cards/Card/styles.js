import styled from 'styled-components';
import QUERIES, { WrapperContent } from '../../../styles/styles';

export const WrapperContentCard = styled(WrapperContent)`
  flex-direction: column;
  margin: 50px 0;
  border-radius: 10px;
  transform: scale(0.97);
  transition: all 0.3s ease-in-out;

  // todo choose neomorphism
  :hover {
    transform: scale(1);
    //box-shadow: 20px 20px 60px #181818, -20px -20px 60px #202020;
  }

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
  margin-bottom: 30px;
  transition: all 0.3s ease-in-out;
  filter: grayscale(1);

  :hover {
    filter: grayscale(0);
    transform: translateY(-5%);
  }
`;
