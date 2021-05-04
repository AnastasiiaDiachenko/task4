import 'babel-polyfill';
import { fork } from 'redux-saga-test-plan/matchers';
import rootSaga from './index';
import watchFetchFilms from './Main/fetchFilmsSaga';
import watchFetchFilm from './Main/fetchFilmSaga';
import watchCreateFilm from './Main/createFilmSaga';
import watchEditFilm from './Main/editFilmSaga';
import watchDeleteFilm from './Main/deleteFilmSaga';

it('rootSaga', () => {
  const generator = rootSaga();
  expect(generator.next().value).toEqual(
    fork(watchFetchFilms)
  );
  expect(generator.next().value).toEqual(
    fork(watchFetchFilm)
  );
  expect(generator.next().value).toEqual(
    fork(watchCreateFilm)
  );
  expect(generator.next().value).toEqual(
    fork(watchEditFilm)
  );
  expect(generator.next().value).toEqual(
    fork(watchDeleteFilm)
  );
  expect(generator.next().done).toBeTruthy();
});
