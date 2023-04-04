import styled from "styled-components";

export default function Header() {
  return (
    <Container>
      <h1>TODO LIST + TDD</h1>
    </Container>
  );
};

const Container = styled.div`
  display:flex;
  align-items:center;
  justify-content:center;

  border:1px solid #fefefe;
  padding:0.3rem 2rem;
  border-radius:0.4rem;

  box-shadow:1px 2px 3px #000000;
  margin-bottom:2rem;

  h1 {
    font-size:32px;
  }
`;