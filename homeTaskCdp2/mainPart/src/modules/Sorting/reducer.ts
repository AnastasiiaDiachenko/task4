import { AnyAction } from 'redux';
import {
  SET_CATEGORY,
  SET_SORT_BY
} from './types';

const initialState = {
  category: 'All',
  sortBy: 'release'
};

const sortingReducer = (state = initialState, action: AnyAction) => {
  switch (action.type) {
    case SET_CATEGORY:
      return { ...state, category: action.payload };
    case SET_SORT_BY:
      return { ...state, sortBy: action.payload };
    default:
      return state;
  }
};

export default sortingReducer;
