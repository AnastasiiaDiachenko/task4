import { call, takeLatest } from 'redux-saga/effects';
import 'babel-polyfill';
import { expectSaga } from 'redux-saga-test-plan';
import axios from 'axios';
import watchFetchFilms, { fetchFilms } from './fetchFilmsSaga';
import * as actionTypes from './types';

const mockResponse = { };
const sagaArgs = { type: 'test', payload: 'film' };

it('just works!', () => expectSaga(fetchFilms, sagaArgs)
  .provide([
    [call(axios, '/movies'), mockResponse]
  ])
  .put({
    type: 'FETCH_FILMS_REQUEST'
  })
  .run());

it('watchFetchFilms', () => {
  const generator = watchFetchFilms();
  expect(generator.next().value).toEqual(
    takeLatest(actionTypes.FETCH_FILMS, fetchFilms)
  );
});
