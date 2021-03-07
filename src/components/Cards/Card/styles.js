import styled from 'styled-components';
import QUERIES, { WrapperContent } from '../../../styles/styles';

export const WrapperContentCard = styled(WrapperContent)`
  flex-direction: column;
  margin: 50px 0;
  padding: 20px;
  border-radius: 10px;
  // background-image: ${({ theme }) => theme.gradient};

  @media (${QUERIES.large}) {
    //align-items: flex-start;
  }

  :hover {
    color: ${({ theme }) => theme.secondary};
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
  //transform: scale(0.97);
  //
  //:hover {
  //  transform: scale(1);
  //}
`;
