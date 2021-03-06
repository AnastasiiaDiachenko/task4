import styled from "styled-components";
import { variables } from "../../helpers/styleVariables";

const Button = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  background: #45444A;
  opacity: 75%;

  &:hover {
    background: #${variables.background.BUTTON};
  }

  .dots {
    position: absolute;
    top: 2px;
    left: 15px;
    transform: rotate(90deg);
    font-size: 30px;
    font-weight: bold;
    color: white;
  }
}
`;

export default Button;
