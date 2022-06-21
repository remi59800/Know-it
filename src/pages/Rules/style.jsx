import styled from "styled-components";

export default styled.section`
  section {
    margin-top: 0.3rem;
    width: 85vw;
  }
  .title {
    border-radius: 10px 10px 0 0;
    background-color: var(--main-color);
    color: var(--white-color);
    font-family: var(--font-family);
    height: 7vh;
    display: flex;
    align-items: center;
  }
  h3 {
    padding: 0;
    font-size: 1.3rem;
    padding-left: 1.3rem;
  }

  .rules {
    display: flex;
    flex-direction: column;
    padding-bottom: 1rem;
    background-color: var(--white-opacity);
    font-family: var(--font-family);
    font-size: 0.9rem;
  }

  img {
    padding-top: 0.5rem;
    border-radius: 0 0 20px 20px;
    max-height: 32vh;
    width: 85vw;
    background-color: white;
    padding-top: 0.5rem;
    padding-bottom: 0.5rem;
  }
  p {
    max-width: 90vw;
    padding-top: 5%;
    padding-left: 5%;
    padding-right: 5%;
    text-align: center;
    font-weight: bolder;
    line-height: 1.5rem;
  }

  @media screen and (min-width: 700px) {
    section {
      width: 600px;
      height: 270px;
      display: flex;
      flex-direction: column;
    }
    .title {
      font-size: 1.5rem;
      padding-left: 3.2vw;
      height: 50px;
      padding-bottom: 0;
    }
    .rules-container {
      width: 600px;
      height: 220px;
      display: flex;
    }
    .rules {
      width: 420px;
      height: 200px;
      font-size: 1.2rem;
      border-radius: 0 0 0 10px;
    }
    p {
      margin: 0;
      padding-top: 2rem;
    }
    .imgContainer {
      height: 220px;
    }
    img {
      border-radius: 0 0 10px;
      width: 180px;
      min-height: 200px;
      max-height: 200px;
    }
  }
`;
