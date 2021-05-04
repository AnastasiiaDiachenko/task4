import reducer from './reducer';
import * as types from './types';

const initialState = {
  category: 'All',
  sortBy: 'release'
};

describe('sorting reducer', () => {
  it('should return the initial state', () => {
    const action = { type: 'test' };
    expect(reducer(undefined, action)).toEqual(initialState);
  });

  it('should handle SET_CATEGORY', () => {
    const payload = 'horror';

    expect(reducer(initialState, {
      type: types.SET_CATEGORY,
      payload
    })).toEqual({
      ...initialState,
      category: payload
    });
  });

  it('should handle SET_SORT_BY', () => {
    const payload = 'name';

    expect(reducer(initialState, {
      type: types.SET_SORT_BY,
      payload
    })).toEqual({
      ...initialState,
      sortBy: payload
    });
  });
});
