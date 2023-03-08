import styled from 'styled-components';

export const Container = styled.div`
  margin-top: 32px;
`;

export const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  strong{
    color: ${({ theme }) => theme.colors.primary.blackText};
    font-size: 24px;
  }

  a {
    font-size:16px;
    color: ${({ theme }) => theme.colors.primary.main};
    text-decoration: none;
    font-weight: bold;
    border: 2px solid  ${({ theme }) => theme.colors.primary.main};
    padding: 8px 16px;
    border-radius: 4px;
  }
`;
