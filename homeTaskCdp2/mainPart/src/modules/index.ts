import { fork } from 'redux-saga/effects';
import watchFetchFilms from './Main/fetchFilmsSaga';
import watchFetchFilm from './Main/fetchFilmSaga';
import watchCreateFilm from './Main/createFilmSaga';
import watchEditFilm from './Main/editFilmSaga';
import watchDeleteFilm from './Main/deleteFilmSaga';

export default function* rootSaga() {
  yield fork(watchFetchFilms);
  yield fork(watchFetchFilm);
  yield fork(watchCreateFilm);
  yield fork(watchEditFilm);
  yield fork(watchDeleteFilm);
}
