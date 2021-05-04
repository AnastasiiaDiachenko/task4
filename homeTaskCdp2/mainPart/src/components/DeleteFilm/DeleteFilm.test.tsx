import * as React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { MemoryRouter, Route } from 'react-router';
import '@testing-library/jest-dom/extend-expect';
import 'babel-polyfill';
import { Provider } from 'react-redux';
// @ts-ignore
import configureStore from 'redux-mock-store';

import DeleteFilm from './index';

const deleteFilm = jest.fn();

let initialState; let mockStore; let
  store;
beforeEach(() => {
  initialState = {};
  mockStore = configureStore();
  store = mockStore(initialState);

  render(
    <MemoryRouter initialEntries={['/']}>
      <Route path="/">
        <Provider store={store}>
          <DeleteFilm deleteFilm={deleteFilm} />
        </Provider>
      </Route>
    </MemoryRouter>
  );
});

test('should open edit pop-up with correct film title', async () => {
  fireEvent.click(screen.getByTestId('confirm-delete'));
  await screen.queryByText('Are you sure you want to delete this movie?');

  expect(deleteFilm).toHaveBeenCalled();
});
