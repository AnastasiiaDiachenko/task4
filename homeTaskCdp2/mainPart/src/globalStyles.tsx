import { createGlobalStyle } from 'styled-components';
import { variables } from './helpers/styleVariables';

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
    min-height: 40px;
    background: rgba(79, 79, 79, 0.7);
    padding-left: 20px;
    border: 0;
    border-radius: 10px;
    font-size: 25px;
    color: #${variables.colors.MAIN};

    ::placeholder,
    ::-webkit-input-placeholder {
      color: #${variables.colors.MAIN};
    }
    :-ms-input-placeholder {
      color: #${variables.colors.MAIN};
    }
  }
`;

export default GlobalStyle;
