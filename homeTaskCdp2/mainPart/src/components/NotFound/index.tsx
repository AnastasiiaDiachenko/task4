import React from 'react';
import { Link } from 'react-router-dom';
import styled, { ThemeProvider } from 'styled-components';
import { Button, ButtonTheme } from '../Button';
import { variables } from '../../helpers/styleVariables';
import MainLogo from '../MainLogo';

const NotFoundStyled = styled.div`
  background: #${variables.background.MAIN};
  color: #${variables.colors.MAIN};
  flex: 1;
  
  section {
    position: absolute;
    top: 50%;
    left: 50%;
    margin-right: -50%;
    transform: translate(-50%, -50%);
    text-align: center;
  }

  p {
    font-size: 100px;
    margin: 0;
    color: #${variables.colors.LOGO};
  }
`;

const NotFound = () => (
  <NotFoundStyled>
    <MainLogo />
    <section>
      <h1>Page Not Found</h1>
      <p>404</p>
      <Link to="/">
        <ThemeProvider theme={ButtonTheme}>
          <Button>Go back to home</Button>
        </ThemeProvider>
      </Link>
    </section>
  </NotFoundStyled>
);

export default NotFound;
