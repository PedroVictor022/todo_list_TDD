import styled from 'styled-components';

export const Container = styled.div`
  margin-top: 74px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;

`;

export const InputSearchContainer = styled.div`
  margin-top: 48px;
  width: 100%;


  input {
     box-shadow: 0px 4px 10px rgba(0,0,0,0.4);
    width: 100%;
    background: #fff;
    border: none;
    border-radius: 2rem;
    outline: 0;
    padding: 0 16px;
    height: 50px;
    &::placeholder {
      color: #BCBCBC;
    }
  }
`;
