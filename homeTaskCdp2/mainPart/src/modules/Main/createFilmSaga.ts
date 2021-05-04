import { call, put, takeEvery } from 'redux-saga/effects';
import axios from 'axios';
import * as actions from './actions';
import * as actionTypes from './types';
import { SERVER } from '../../Api/constants';

function* createFilm({ payload }: ReturnType<typeof actions.createFilm>) {
  try {
    yield put(actions.createFilmRequest());

    const film = yield call(() => axios.post(`${SERVER}movies`, { ...payload }));

    yield put(actions.createFilmSuccess(film.data));
  } catch (e) {
    yield put(actions.createFilmFailed(e));
  }
}

function* watchCreateFilm() {
  yield takeEvery(actionTypes.CREATE_FILM, createFilm);
}

export { createFilm };

export default watchCreateFilm;
