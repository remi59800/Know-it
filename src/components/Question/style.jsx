import styled from "styled-components";

export default styled.div`
  section {
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 27vh;
    width: 50vh;
  }
  #category {
    border-radius: 5px 5px 0 0;
    width: 100%;
    height: 7vh;
    background-color: var(--main-color);
    display: flex;
    text-align: center;
    align-items: center;
    position: relative;
  }
  img {
    height: 60%;
    aspect-ratio: 1/1;
    margin-left: 3%;
    margin-right: 3%;
    background-repeat: none;
  }
  .none {
    display: none;
  }
  h4 {
    font-family: var(--font-family);
    font-size: 1.1rem;
    color: var(--white-color);
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
  .question {
    border-radius: 0 0 5px 5px;
    width: 100%;
    height: 21vh;
    background-color: var(--white-color);
    display: flex;
    text-align: center;
    align-items: center;
    justify-content: center;
  }
  h6 {
    width: 95%;
    font-size: 1.15rem;
    text-align: center;
    vertical-align: center;
    padding-left: 1.3rem;
    padding-right: 1.3rem;
    line-height: 1.4rem;
  }
  @media screen and (min-width: 700px) {
    h4 {
      font-size: 1.3rem;
    }
  }
`;
