import React from "react";
import styled from "styled-components";
import {variables} from "../../helpers/styleVariables";

const SortBlock = styled.div`
  display: flex;
  align-items: center;

  @media (max-width: 850px) {
    justify-content: center;
  }
`;

const SortLadel = styled.span`
  padding-right: 20px;
  color: #${variables.colors.SECONDARY};
`;

const SortSelect = styled.select`
  background: #${variables.background.MAIN};
  font-size: 20px;
  text-transform: uppercase;
  color: white;
`;

const Sort = () => (
  <SortBlock>
    <SortLadel>
      SORT BY
    </SortLadel>
  
    <SortSelect>
      <option>release date</option>
      <option>name</option>
    </SortSelect>
  </SortBlock>
);

export default Sort;
