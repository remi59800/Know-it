import styled from "styled-components";

export default styled.header`
  background-color: rgba(255, 255, 255, 0.4);
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  height: 24vh;
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: center;

  img {
    height: 13vh;
    width: 50vw;
    object-fit: contain;
  }

  @media screen and (min-width: 700px) {
    width: 100vw;
    height: 19vh;
    img {
      height: 15vh;
      width: 15vw;
      object-fit: contain;
    }
    .logo {
      width: 100%;
      display: flex;
      justify-content: center;
    }
    .hamburger {
      display: none;
      z-index: 900;
    }
  }
`;
