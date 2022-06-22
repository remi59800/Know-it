import styled from "styled-components";

export default styled.div`
  div {
    width: 70vw;
    margin-top: 1rem;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  h5 {
    font-family: var(--font-family);
    line-height: 1.8rem;
    text-align: center;
    font-size: 1.3rem;
    margin-bottom: 2rem;
  }
  img {
    border-radius: 20px;
    max-width: 200px;
  }
  @media screen and (min-width: 600px) {
    img {
      max-width: 280px;
    }
  }
  @media screen and (max-width: 400px) {
    div {
      margin-bottom: 3rem;
    }
    h5 {
      line-height: 2rem;
      font-size: 1.1rem;
    }
  }
`;
