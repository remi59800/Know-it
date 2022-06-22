import styled from "styled-components";

export default styled.div`
  div {
    margin: auto;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 36vh;
    height: 36vh;
    text-align: center;
    background-image: url("/images/play-button.svg");
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center;
    &:hover {
      background-size: contain;
      width: 36vw;
      height: 36vh;
      transition: 0.6sec;
      animation: buttonplay 1s infinite linear;
    }
  }

  @keyframes buttonplay {
    0% {
      transform: scale(1);
    }
    50% {
      transform: scale(1.1);
    }
    100% {
      transform: scale(1);
    }
  }

  a:link {
    text-decoration: none;
  }

  h3 {
    color: var(--white-color);
    font-size: 3.3em;
  }
  @media screen and (max-width: 600px) {
    h3 {
      font-size: 2.5em;
    }
    div {
      width: 33vw;
      height: 33vh;
    }
    div:hover {
      width: 33vw;
      height: 33vh;
      animation: buttonplay 1s infinite;
      background-size: contain;
    }
  }
`;
