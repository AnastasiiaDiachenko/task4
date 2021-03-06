import React from "react";
import styled from 'styled-components';
import { variables } from '../../helpers/styleVariables';
import Category from "../Category";
import Sort from "../Sort";

const MainMenu = styled.div`
  display: flex;
  justify-content: space-between;
  border-bottom: outset 5px lightgray;
  text-transform: uppercase;
  color: #${variables.colors.MAIN};
  font-size: 20px;
`;

const Menu = () => (
  <MainMenu>
    <Category />

    <Sort />
  </MainMenu>
);

export default Menu;
