import styled from 'styled-components';
import QUERIES, { SubheadingDumb } from '../../styles/styles';

export const TableWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

export const TableCell = styled.div`
  padding-right: 20px;
  margin-bottom: 20px;

  @media (${QUERIES.large}) {
    margin-bottom: 0;
    padding-right: 40px;
  }
`;

export const TableHeading = styled(SubheadingDumb)`
  text-transform: uppercase;
  font-weight: bold;
  font-size: 16px;
  margin-bottom: 16px;
`;

export const TableLink = styled.a`
  border-bottom: 1px solid ${({ theme }) => theme.secondaryReverse};
  color: ${({ theme }) => theme.secondaryReverse};
  :hover {
    border-bottom: 1px solid ${({ theme }) => theme.secondary};
    color: ${({ theme }) => theme.secondary};
  }
`;
