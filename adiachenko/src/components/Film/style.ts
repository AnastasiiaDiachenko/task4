import styled from "styled-components";
import { variables } from "../../helpers/styleVariables";

const FilmStyled = styled.div`
  position: relative;
  max-width: 350px;
  font-size: 17px;
  color: #${variables.colors.MAIN};
  
  .wrapper {
    min-width: 350px;
    height: 525px;
    
    background-color: lightblue;
  }
`;

export default FilmStyled;
