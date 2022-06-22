import styled from "styled-components";

export default styled.section`
  margin: auto;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  section {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  h1 {
    text-align: center;
    margin-bottom: 5vh;
    margin-bottom: 5vh;
    line-height: 2.2rem;
    font-family: var(--font-family);
    font-weight: 200;
    font-size: 1.7rem;
    color: var(--main-color);
  }
  div {
    height: 40vh;
  }
  @media screen and (max-width: 600px) {
    h1 {
      text-align: center;
      font-size: 1.5rem;
    }
  }
`;
