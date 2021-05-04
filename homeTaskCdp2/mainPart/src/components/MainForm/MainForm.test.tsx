import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import 'babel-polyfill';
import '@testing-library/jest-dom/extend-expect';
import { Provider } from 'react-redux';
// @ts-ignore
import configureStore from 'redux-mock-store';
import userEvent from '@testing-library/user-event';
import MainForm from './index';

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

const closeForm = jest.fn();

let initialState; let mockStore; let store: any;

beforeAll(() => {
  initialState = {};
  mockStore = configureStore();
  store = mockStore(initialState);
});

test('should render Save button', () => {
  render(
    <Provider store={store}>
      <MainForm edit film={film} closeForm={closeForm} />
    </Provider>
  );

  expect(screen.getByTestId('submit')).toHaveTextContent('Save');
});

test('should render Edit button', () => {
  render(
    <Provider store={store}>
      <MainForm edit={false} closeForm={closeForm} />
    </Provider>
  );

  expect(screen.getByTestId('submit')).toHaveTextContent('Submit');
});

test('Should show error message for title', async () => {
  const { findByText } = render(
    <Provider store={store}>
      <MainForm edit={false} closeForm={closeForm} />
    </Provider>
  );

  fireEvent.click(screen.getByTestId('submit'));

  const message = await findByText('title required');
  expect(message).toBeInTheDocument();
});

test('renders add film snapshot', () => {
  const { asFragment } = render(
    <Provider store={store}>
      <MainForm edit={false} closeForm={closeForm} />
    </Provider>
  );

  expect(asFragment(
    // @ts-ignore
    <Provider store={store}>
      <MainForm edit={false} closeForm={closeForm} />
    </Provider>
  )).toMatchSnapshot();
});

test('renders edit title', () => {
  const { getByText } = render(
    <Provider store={store}>
      <MainForm edit film={film} closeForm={closeForm} />
    </Provider>
  );

  const title = getByText('Edit movie');

  expect(title).toBeInTheDocument();
});

test('should not renders add title', () => {
  const { queryByText } = render(
    <Provider store={store}>
      <MainForm edit film={film} closeForm={closeForm} />
    </Provider>
  );

  const title = queryByText('Add movie');

  expect(title).toBeNull();
});

test('should set name value on change name input', () => {
  const { getByPlaceholderText, getByDisplayValue } = render(
    <Provider store={store}>
      <MainForm edit={false} closeForm={closeForm} />
    </Provider>
  );

  fireEvent.change(getByPlaceholderText('Please enter your Title'), {
    target: { value: 'test' }
  });

  expect(getByDisplayValue('test')).toBeInTheDocument();
});

test('should set Overview value on change Overview input', () => {
  render(
    <Provider store={store}>
      <MainForm edit={false} closeForm={closeForm} />
    </Provider>
  );

  userEvent.type(screen.getByPlaceholderText('Please enter your Overview'), 'test');

  expect(screen.getByDisplayValue('test')).toBeInTheDocument();
});

test('should reset title value to started value', async () => {
  render(
    <Provider store={store}>
      <MainForm edit film={film} closeForm={closeForm} />
    </Provider>
  );

  fireEvent.change(screen.getByPlaceholderText('Please enter your Title'), {
    target: { value: 'test' }
  });
  fireEvent.click(screen.getByText('Reset'));
  expect(await screen.findByDisplayValue('The Girl on the Train')).toBeInTheDocument();
});
