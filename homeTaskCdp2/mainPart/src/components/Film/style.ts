import styled from 'styled-components';
import { variables } from '../../helpers/styleVariables';

const FilmStyled = styled.div`
  position: relative;
  max-width: 350px;
  font-size: 17px;
  color: #${variables.colors.MAIN};

  .rating {
    position: absolute;
    top: 8px;
    left: 8px;
    border-radius: 50%;
    padding: 10px;
    background: #${variables.colors.LOGO};
    border: 2px solid gold;
    min-width: 25px;
    text-align: center;
  }
`;

export default FilmStyled;
