import styled from "styled-components";
import {variables} from "../../helpers/styleVariables";

const Form = styled.form`
  display: flex;
  flex-direction: column;
  color: white;
  
  label {
    display: flex;
    flex-direction: column;
    padding: 15px 0;
  };
  
  select {
    width: 100%;
  }
  
  input {
    width: calc(100% - 20px);
  }
  
  span {
    color: #${variables.background.BUTTON};
    text-transform: uppercase;
    padding-bottom: 10px;
  };
  
  .buttons {
    padding-top: 70px;
    display: flex;
    justify-content: flex-end;
  }
  
  .reset {
    margin-right: 50px;
  }
`;

export { Form };