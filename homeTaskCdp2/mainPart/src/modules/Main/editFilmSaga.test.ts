import { call, takeEvery } from 'redux-saga/effects';
import 'babel-polyfill';
import { expectSaga } from 'redux-saga-test-plan';
import axios from 'axios';
import watchEditFilm, { editFilm } from './editFilmSaga';
import * as actionTypes from './types';

const mockFilm = {
  id: 1121223123,
  title: 'test',
  release_date: '2021-04-14',
  genres: ['Fantasy'],
  overview: 'test',
  poster_path: 'https://image.tmdb.org/t/p/w500/pU1ULUq8D3iRxl1fdX2lZIzdHuI.jpg',
  runtime: 30
};

const mockResponse = { };
const sagaArgs = { type: 'test', payload: mockFilm };

it('just works!', () => expectSaga(editFilm, sagaArgs)
  .provide([
    [call(axios, '/movies'), mockResponse]
  ])
  .put({
    type: 'EDIT_FILM_REQUEST'
  })
  .run());

it('watchEditFilm', () => {
  const generator = watchEditFilm();
  expect(generator.next().value).toEqual(
    takeEvery(actionTypes.EDIT_FILM, editFilm)
  );
});
