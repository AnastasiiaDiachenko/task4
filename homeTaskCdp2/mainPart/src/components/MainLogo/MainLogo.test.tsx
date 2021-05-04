import React from 'react';
// @ts-ignore
import renderer from 'react-test-renderer';
import MainLogo from './index';

describe('<MainLogo />', () => {
  it('should renders correctly when user is on logged in page', () => {
    const tree = renderer
      .create(<MainLogo />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
