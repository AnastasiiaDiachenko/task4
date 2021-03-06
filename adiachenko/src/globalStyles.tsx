import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  * {
    outline: none;
  }

  body {
    margin: 0;
    font-family: cursive;
  }
  
  .app {
    display: flex;
    flex-direction: column;
    height:100vh;
  }
  
  main {
    flex: 1;
  }

  ul {
    list-style: none;
  }
  
  button,
  select,
  input {
    border: none;
  }

  select,
  input {
    outline: none;
  }
`;

export default GlobalStyle;
