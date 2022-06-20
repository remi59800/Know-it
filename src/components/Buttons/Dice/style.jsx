import styled from "styled-components";

export default styled.div`
  display: flex;
  justify-content: center;
  margin-top: 1vh;

  button {
    width: 8vh;
    aspect-ratio: 1/1;
    border: none;
    margin: 0px;
    background: ${(props) => {
      return `url(/images/dice${props.dice}.svg) no-repeat`;
    }};
    background-size: contain;
    cursor: pointer;
    display: inline-block;
    animation: wiggle 1.5s infinite;

    @keyframes wiggle {
      0% {
        transform: rotate(0deg);
      }
      80% {
        transform: rotate(0deg);
      }
      85% {
        transform: rotate(10deg);
      }
      95% {
        transform: rotate(-10deg);
      }
      100% {
        transform: rotate(0deg);
      }
    }
  }
  @media screen and (min-width: 700px) {
    display: flex;
    justify-content: center;
    margin-top: 3vh;
  }
`;
