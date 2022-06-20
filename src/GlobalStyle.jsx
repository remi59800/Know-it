import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
:root{
  --main-color: #13293e;
  --back-color: rgba(77, 4, 195, 0.5);
  --white-opacity:rgba(232, 240, 237, 0.4);
  --white-color: #e8f0ed;
  --right-answer:#78d133;
  --right-answer-border:#5aa233;
  --right-answer-background:green;
  --wrong-answer:#f70e0e;
  --wrong-answer-border:#f60e0e;
  --wrong-answer-background:#802D00;
  --font-family: 'Andika New Basic', sans-serif;
  --font-family-baseline:'Handlee', cursive;
  --hover-color:rgb(77, 4, 195);
}
body{
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: var(--back-color);
  width: 100vw;
  height: 100vh;
  background-image: url("/images/background-image.svg") ;
  background-size: 100%;
  }
  p,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  a
   {
    font-family: var(--font-family);
  }
  p {
    font-size: 1em;
  }
  h1 {
    font-size: 2rem;
  }
  h2 {
    font-size: 2em;
  }
  h3 {
    font-size: 1.8em;
  }
  h4 {
    font-size: 1.6em;
  }
  h5 {
    font-size: 1.5em;
  }
  h6 {
    font-size: 1.2em;
  }
 `;
export default GlobalStyle;
