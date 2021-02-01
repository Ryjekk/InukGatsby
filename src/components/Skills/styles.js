import styled from 'styled-components';

export const SkillsWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const HeadingSkills = styled.p`
  width: auto;
  margin-left: 0;
  font-size: 16px;
  letter-spacing: 4px;
  border-bottom: 1px solid ${({ theme }) => theme.secondary};
  color: ${({ theme }) => theme.secondary};
  display: inline;
`;
