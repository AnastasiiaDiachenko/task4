import styled from 'styled-components';
import { variables } from '../../helpers/styleVariables';

const Button = styled.button`
  font-size: 1.5em;
  border: 0;
  border-radius: 10px;
  text-transform: uppercase;
  
  padding: ${props => props.theme.padding} ;
  color: ${props => props.theme.color};
  background: ${props => props.theme.bg_color};
`;

Button.defaultProps = {
  theme: {
    color: `#${variables.colors.MAIN}`,
    bg_color: `#${variables.background.BUTTON}`,
    padding: '0 40px'
  }
}

export default Button;
