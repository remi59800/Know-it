import styled from "styled-components";

export default styled.div`
  .pawn {
    width: 20vw;
    aspect-ratio: 1/1;
  }
  .yellow {
    z-index: 1;
    background: url("/images/pawn-yellow.svg") no-repeat;
  }
  .pink {
    z-index: 1;
    background: url("/images/pawn-pink.svg") no-repeat;
  }
  .orange {
    z-index: 1;
    background: url("/images/pawn-orange.svg") no-repeat;
  }
  .purple {
    z-index: 1;
    background: url("/images/pawn-purple.svg") no-repeat;
  }
  .green {
    z-index: 1;
    background: url("/images/pawn-green.svg") no-repeat;
  }
  .blue {
    z-index: 1;
    background: url("/images/pawn-blue.svg") no-repeat;
  }
  .empty {
    background: url("/images/pawn-empty.svg") no-repeat;
  }
  .sameClass {
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    position: absolute;
    background-size: contain;
  }
  @media screen and (min-width: 500px) {
    .pawn {
      width: 14vw;
    }
  }
  @media screen and (min-width: 600px) {
    .pawn {
      width: 12vw;
    }
  }
  @media screen and (min-width: 700px) {
    .pawn {
      min-width: 100px;
      max-width: 115px;
      aspect-ratio: none;
    }
  }
`;
