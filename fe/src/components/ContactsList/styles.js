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
    transition: all .2s ease-in;
    &:hover {
      background-color: ${({ theme }) => theme.colors.primary.main};
      color: #fff;
    }
  }
`;

export const ListContainer = styled.div`
  margin-top: 24px;
  header {
    margin-bottom: 8px;
    button {
    background: transparent;
    border: none;
    display: flex;
    align-items: center;
  }
    span {
    margin-right: 8px;
    font-weight: bold;
    color : ${({ theme }) => theme.colors.primary.main};
  }
  }
`;

export const Card = styled.div`
  background: #fff;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.4);
  padding: 16px;
  border-radius: 4px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  .info {
    .contact-name {
      display: flex;
      align-items: center;
      small {
         background: ${({ theme }) => theme.colors.primary.lighter};
         color: ${({ theme }) => theme.colors.primary.main};
         font-weight: bold;
         text-transform: uppercase;
      }
    }
  }
`;