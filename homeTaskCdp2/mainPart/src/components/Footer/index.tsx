import React from 'react';
import styled from 'styled-components';
import { variables } from '../../helpers/styleVariables';

import MainLogo from '../MainLogo';

const FooterStyled = styled.footer`
  display: flex;
  align-items: center;
  justify-content: center;
  background: #${variables.background.FOOTER};
  min-height: 60px;
  z-index: 1;
`;

const Footer = () => (
  <FooterStyled>
    <MainLogo />
  </FooterStyled>
);

export default Footer;
