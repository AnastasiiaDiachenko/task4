import * as actions from './actions';
import * as types from './types';

describe('actions', () => {
  it('should create an action to SET_SORT_BY', () => {
    const payload = 'name';

    const expectedAction = {
      type: types.SET_SORT_BY,
      payload
    };

    expect(actions.setSortBy(payload))
      .toEqual(expectedAction);
  });

  it('should create an action to SET_CATEGORY', () => {
    const payload = 'horror';

    const expectedAction = {
      type: types.SET_CATEGORY,
      payload
    };

    expect(actions.setCategory(payload))
      .toEqual(expectedAction);
  });
});
