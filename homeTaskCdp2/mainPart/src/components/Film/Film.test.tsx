import * as React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { MemoryRouter, Route } from 'react-router';
import '@testing-library/jest-dom/extend-expect';
import 'babel-polyfill';
import { Provider } from 'react-redux';
// @ts-ignore
import configureStore from 'redux-mock-store';

import Film from './index';

const film = {
  id: 346685,
  title: 'The Girl on the Train',
  tagline: 'What you see can hurt you.',
  vote_average: 6.2,
  vote_count: 2437,
  release_date: '2016-10-05',
  poster_path: 'https://image.tmdb.org/t/p/w500/AhTO2QWG0tug7yDoh0XoaMhPt3J.jpg',
  overview: 'Rachel Watson, devastated by her recent divorce, spends her daily commute fantasizing about the seemingly perfect couple who live in a house that her train passes every day, until one morning she sees something shocking happen there and becomes entangled in the mystery that unfolds.',
  budget: 45000000,
  revenue: 173185859,
  genres: [
    'Crime',
    'Drama',
    'Mystery',
    'Romance',
    'Thriller'
  ],
  runtime: 112
};
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
          <Film film={film} />
        </Provider>
      </Route>
    </MemoryRouter>
  );
});

test('should render correct film title', async () => {
  const message = await screen.findByText('The Girl on the Train');
  expect(message).toBeInTheDocument();
});

test('should open pop-up with edit text', async () => {
  fireEvent.click(screen.getByTestId('options'));
  const text = await screen.findByText('Edit');

  expect(text).toBeInTheDocument();
});

test('should open edit pop-up with correct film title', async () => {
  fireEvent.click(screen.getByTestId('options'));
  fireEvent.click(await screen.findByText('Edit'));
  const text = await screen.findByDisplayValue('The Girl on the Train');

  expect(text).toBeInTheDocument();
});

test('should close edit pop-up', async () => {
  fireEvent.click(screen.getByTestId('options'));
  fireEvent.click(await screen.findByText('Edit'));
  fireEvent.click(await screen.findByTestId('close'));
  const text = await screen.queryByDisplayValue('The Girl on the Train');

  expect(text).toBeNull();
});

test('should open delete pop-up with correct text', async () => {
  fireEvent.click(screen.getByTestId('options'));
  fireEvent.click(await screen.findByText('Delete'));
  const text = await screen.findByText('Are you sure you want to delete this movie?');

  expect(text).toBeInTheDocument();
});
