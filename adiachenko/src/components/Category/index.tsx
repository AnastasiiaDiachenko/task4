import React from "react";
import styled from "styled-components";
import { variables } from '../../helpers/styleVariables';

const CategoryUl = styled.ul`
  display: flex;
  padding: 0;
  margin: 0;

  li {
    padding: 10px 20px 10px 0;

    &.active {
      border-bottom: 5px solid #${variables.background.BUTTON};
      margin-bottom: -5px;
    }
  }
`;

const Category = () => (
  <CategoryUl>
    <li className="active">
      ALL
    </li>
    <li>
      DOCUMENTARY
    </li>
    <li>
      COMEDY
    </li>
    <li>
      CRIME
    </li>
  </CategoryUl>
);

export default Category;
