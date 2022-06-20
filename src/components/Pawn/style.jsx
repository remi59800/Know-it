import styled from "styled-components";

export default styled.div`
  .pawn {
    width: 18vh;
    aspect-ratio: 1/1;
  }
  .yellow {
    z-index: 1;
    background: url("../../../public/images/pawn-yellow.svg") no-repeat;
  }
  .pink {
    z-index: 1;
    background: url("../../../public/images/pawn-pink.svg") no-repeat;
  }
  .orange {
    z-index: 1;
    background: url("../../../public/images/pawn-orange.svg") no-repeat;
  }
  .purple {
    z-index: 1;
    background: url("../../../public/images/pawn-purple.svg") no-repeat;
  }
  .green {
    z-index: 1;
    background: url("../../../public/images/pawn-green.svg") no-repeat;
  }
  .blue {
    z-index: 1;
    background: url("../../../public/images/pawn-blue.svg") no-repeat;
  }
  .empty {
    background: url("../../../public/images/pawn-empty.svg") no-repeat;
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
`;
