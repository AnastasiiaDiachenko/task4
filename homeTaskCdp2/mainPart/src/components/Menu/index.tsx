import React from 'react';
import styled from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';
import { variables } from '../../helpers/styleVariables';
import Category from '../Category';
import Sort from '../Sort';
import { getCategory, getSortBy } from '../../modules/Sorting/selectors';
import { setCategory, setSortBy } from '../../modules/Sorting/actions';

const MainMenu = styled.div`
  display: flex;
  justify-content: space-between;
  border-bottom: outset 5px lightgray;
  text-transform: uppercase;
  color: #${variables.colors.MAIN};
  font-size: 20px;

  @media (max-width: 850px) {
    flex-direction: column;
  }
`;

const Menu = () => {
  const dispatch = useDispatch();

  const category = useSelector(getCategory);
  const sortByProp = useSelector(getSortBy);
  const setCategoryProp = (type: string) => dispatch(setCategory(type));
  const setSortByProp = (type: string) => dispatch(setSortBy(type));

  return (
    <MainMenu>
      <Category category={category} setCategory={setCategoryProp} />
      <Sort sortBy={sortByProp} setSortBy={setSortByProp} />
    </MainMenu>
  );
};

export default Menu;
