import styled from "styled-components";

export default styled.div`
  .team {
    width: 80vw;
    border-radius: 10px;
    background-color: var(--white-opacity);
    font-family: var(--font-family);
    margin-top: 1rem;
    margin-bottom: 1rem;
  }
  .title-container {
    border-radius: 10px 10px 0 0;
    background-color: var(--main-color);
    color: var(--white-color);
    font-family: var(--font-family);
    height: 7vh;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  h3 {
    font-size: 1.3rem;
  }
  .contact-container {
    box-sizing: border-box;
    height: 100%;
    padding-top: 1rem;
    padding-bottom: 1rem;
    display: flex;
    align-items: center;
    flex-direction: column;
    font-size: 0.6rem;
  }
  .contact {
    color: var(--main-color);
    text-align: center;
  }
  .links {
    padding: 1vh;
  }
  .icon {
    width: 5vw;
    padding-left: 0.3rem;
  }
  @media screen and (min-width: 400px) {
    .team {
      width: 62vw;
    }
  }
  @media screen and (min-width: 500px) {
    .team {
      width: 50vw;
    }
    .icon {
      width: 3vw;
      padding-left: 0.3rem;
    }
  }
  @media screen and (min-width: 700px) {
    .team {
      width: 50vw;
    }
    .icon {
      width: 3vw;
      padding-left: 0.3rem;
    }
    .contact-container {
      box-sizing: border-box;
      height: 100%;
      display: flex;
      align-items: center;
      flex-direction: column;
      font-size: 0.6rem;
      position: relative;
    }
    .contact {
      display: flex;
      align-items: center;
    }
  }
  @media screen and (min-width: 1000px) {
    .team {
      width: 45vw;
    }
  }
`;
