import {
  SET_CATEGORY,
  SET_SORT_BY
} from './types';

const setCategory = (category: string) => ({
  type: SET_CATEGORY,
  payload: category
});

const setSortBy = (isSearch: string) => ({
  type: SET_SORT_BY,
  payload: isSearch
});

export {
  setCategory,
  setSortBy
};
