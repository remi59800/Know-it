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
      max-width: 600px;
      display: grid;
      grid-template-rows: 50px 250px;
    }
    .title {
      font-size: 2rem;
      padding-left: 2vw;
      padding-bottom: 0;
    }
    .rules-container {
      max-width: 600px;
      display: grid;
      grid-template-columns: 420px 180px;
      grid-template-rows: 220px;
    }
    .rules {
      width: 420px;
      font-size: 1.2rem;
      border-radius: 0 0 0 10px;
    }
    p {
      margin: 0;
      padding-top: 2rem;
    }
    .rules-container {
    }
    .img-container {
      padding-top: 0;
      min-height: 206px;
    }
    img {
      border-radius: 0 0 10px;
      width: 180px;
      background-color: white;
    }
  }
`;
