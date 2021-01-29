import styled from 'styled-components';
import QUERIES, { Full, Heading, Paragraph } from '../../styles/styles';

export const FooterWrapper = styled.div`
  width: 100%;
  background-color: ${({ theme }) => theme.alt};

  * {
    margin-bottom: 40px;
  }

  ${Full} {
    margin-top: 0;
    margin-bottom: 0;
    padding: 100px 30px 0 30px;

    @media (${QUERIES.large}) {
      padding-top: 200px;
    }
  }

  ${Heading} {
    font-size: 25px;
    @media (${QUERIES.large}) {
      font-size: 50px;
    }
  }

  ${Paragraph} {
    color: ${({ theme }) => theme.textLight};
    font-size: 15px;
    max-width: 700px;
    @media (${QUERIES.large}) {
      font-size: 20px;
    }
  }
`;

export const ContactLink = styled.a`
  cursor: pointer;
  color: ${({ theme }) => theme.textMain};
  font-size: 15px;
  font-weight: 600;
  padding-bottom: 10px;
  border-bottom: 3px solid ${({ theme }) => theme.textMain};
  transition: all 0.3s ease-in-out;
  :hover {
    border-bottom: 3px solid transparent;
  }

  @media (${QUERIES.large}) {
    font-size: 20px;
  }
`;

export const FooterContent = styled.div`
  display: flex;
  width: 100%;
  height: 130px;
  padding: 0;
  margin: 150px 0 0 0;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  @media (${QUERIES.large}) {
    flex-wrap: nowrap;
    margin: 250px 0 0 0;
    height: 100px;
  }

  ${Paragraph} {
    margin-left: 30px;
    font-size: 15px;
    font-weight: 500;
    color: ${({ theme }) => theme.textMain};

    @media (${QUERIES.large}) {
      margin-left: 50px;
    }
  }
`;

export const FooterSocial = styled.div`
  display: flex;

  ${Paragraph} {
    margin-left: 0;
    margin-right: 20px;
  }
`;

export const FooterLogo = styled(FooterSocial)`
  justify-content: flex-end;
  margin-right: 30px;
`;

export const SocialLink = styled.a`
  padding-bottom: 5px;
  border-bottom: 3px solid transparent;
  transition: all 0.3s ease-in-out;
  :hover {
    border-bottom: 3px solid ${({ theme }) => theme.textMain};
  }
`;
