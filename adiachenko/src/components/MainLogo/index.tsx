import React from "react";
import styled from 'styled-components';
import { variables } from '../../helpers/styleVariables';

const Logo = styled.span`
  color: #${variables.colors.LOGO};
  font-size: ${variables.fontSize.LOGO};
  z-index: 3;
`;

const LogoBold = styled.span`
  font-weight: bold;
`;

const MainLogo = () => (
  <Logo>
    <LogoBold>netflix</LogoBold>roulette
  </Logo>
);

export default MainLogo;
