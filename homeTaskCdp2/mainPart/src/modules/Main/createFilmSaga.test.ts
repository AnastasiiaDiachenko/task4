import { call, takeEvery } from 'redux-saga/effects';
import 'babel-polyfill';
import { expectSaga } from 'redux-saga-test-plan';
import axios from 'axios';
import watchCreateFilm, { createFilm } from './createFilmSaga';
import * as actionTypes from './types';

const mockFilm = {
  title: 'test',
  release_date: '2021-04-14',
  genres: ['Fantasy'],
  overview: 'test',
  poster_path: 'https://image.tmdb.org/t/p/w500/pU1ULUq8D3iRxl1fdX2lZIzdHuI.jpg',
  runtime: 30
};

const mockResponse = { };
const sagaArgs = { type: 'test', payload: mockFilm };

it('just works!', () => expectSaga(createFilm, sagaArgs)
  .provide([
    [call(axios, '/movies'), mockResponse]
  ])
  .put({
    type: 'CREATE_FILM_REQUEST'
  })
  .run());

it('watchCreateFilm', () => {
  const generator = watchCreateFilm();
  expect(generator.next().value).toEqual(
    takeEvery(actionTypes.CREATE_FILM, createFilm)
  );
});
