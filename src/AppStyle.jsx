import styled from "styled-components";

export default styled.div`
  header {
    z-index:9;
  }
  main {
    height: 76vh;
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
  }
  @media screen and (min-width: 700px) {
    main {
    height: 70vh;
  }
`;
