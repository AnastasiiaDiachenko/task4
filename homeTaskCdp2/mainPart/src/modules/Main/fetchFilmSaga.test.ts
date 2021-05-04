import { call, takeLatest } from 'redux-saga/effects';
import 'babel-polyfill';
import { expectSaga } from 'redux-saga-test-plan';
import axios from 'axios';
import watchFetchFilm, { fetchFilm } from './fetchFilmSaga';
import * as actionTypes from './types';

const mockResponse = { };
const sagaArgs = { type: 'test', payload: 338970 };

it('just works!', () => expectSaga(fetchFilm, sagaArgs)
  .provide([
    [call(axios, '/movies/338970'), mockResponse]
  ])
  .put({
    type: 'FETCH_FILM_REQUEST'
  })
  .run());

it('watchFetchFilm', () => {
  const generator = watchFetchFilm();
  expect(generator.next().value).toEqual(
    takeLatest(actionTypes.FETCH_FILM, fetchFilm)
  );
});
