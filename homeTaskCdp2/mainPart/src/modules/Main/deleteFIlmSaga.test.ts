import { call, takeEvery } from 'redux-saga/effects';
import 'babel-polyfill';
import { expectSaga } from 'redux-saga-test-plan';
import axios from 'axios';
import watchDeleteFilm, { deleteFilm } from './deleteFilmSaga';
import * as actionTypes from './types';

const mockResponse = { };
const sagaArgs = { type: 'test', payload: 1619119464631 };

it('just works!', () => expectSaga(deleteFilm, sagaArgs)
  .provide([
    [call(axios, '/movies'), mockResponse]
  ])
  .put({
    type: 'DELETE_FILM_REQUEST'
  })
  .run());

it('watchDeleteFilm', () => {
  const generator = watchDeleteFilm();
  expect(generator.next().value).toEqual(
    takeEvery(actionTypes.DELETE_FILM, deleteFilm)
  );
});
