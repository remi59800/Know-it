import styled from "styled-components";

export default styled.section`
  .dice {
    transform: rotate(20deg);
    position: relative;
    bottom: 30px;
  }
  .answer {
    margin-top: 1vh;
    position: relative;
    bottom: 2rem;
  }
  .pawn {
    margin: auto;
    width: 18vw;
    position: relative;
  }

  @media screen and (min-width: 500px) {
    justify-content: center;
    .dice {
    }
    .pawn {
      width: 14vw;
    }
  }
  @media screen and (min-width: 700px) {
    justify-content: center;
    .dice {
      object-position: top;
      bottom: 40px;
    }
    .pawn {
      position: absolute;
      bottom: 16.5vh;
      right: 27vw;
      width: 9vw;
    }
  }
  @media screen and (min-width: 700px) {
    .answerPawnContainer {
      display: flex;
      justify-content: center;
      align-content: center;
      position: relative;
    }
    .pawn {
      position: absolute;
      top: 94%;
      left: 90%;
    }
  }
  @media screen and (min-width: 700px) {
    .pawn {
      position: absolute;
      top: 62%;
      left: 74%;
    }
  }
  @media screen and (min-width: 850px) {
    .pawn {
      position: absolute;
      top: 62%;
      left: 70%;
    }
  }
  @media screen and (min-width: 1000px) {
    .pawn {
      position: absolute;
      top: 62%;
      left: 65%;
    }
  }
  @media screen and (min-width: 1200px) {
    .pawn {
      position: absolute;
      top: 62%;
      left: 63%;
    }
  }
`;
