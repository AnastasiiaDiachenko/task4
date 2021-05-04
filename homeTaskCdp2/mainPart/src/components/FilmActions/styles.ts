import styled from 'styled-components';
import { variables } from '../../helpers/styleVariables';

const Actions = styled.div`
  position: absolute;
  right: 7px;
  top: 7px;
  display: flex;
  flex-direction: column;
  min-width: 120px;
  z-index: 1;

  button {
    background: #${variables.background.MAIN};
    color: #${variables.colors.MAIN};
    padding: 10px 15px;
    text-align: start;
    cursor: pointer;

    &:hover {
      background: #${variables.background.BUTTON};
    }
  }

  .close {
    text-align: end;
  }
`;

export default Actions;
