import styled from 'styled-components';
import { variables } from '../../helpers/styleVariables';

const Button = styled.button`
  font-size: 1.5em;
  border-radius: 10px;
  text-transform: uppercase;
  
  border: ${props => props.theme.border};
  padding: ${props => props.theme.padding} ;
  color: ${props => props.theme.color};
  background: ${props => props.theme.bg_color};
`;

Button.defaultProps = {
  theme: {
    color: `#${variables.colors.MAIN}`,
    bg_color: `#${variables.background.BUTTON}`,
    padding: '0 40px',
    borer: '0'
  }
}

const ButtonTheme = {
  color: `#${variables.background.BUTTON}`,
  bg_color: `${variables.background.BUTTON2}`,
  padding: '10px',
  border: `2px solid #${variables.background.BUTTON}`
};

export { Button, ButtonTheme };
