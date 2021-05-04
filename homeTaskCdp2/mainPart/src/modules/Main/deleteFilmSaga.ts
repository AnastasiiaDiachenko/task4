import { call, put, takeEvery } from 'redux-saga/effects';
import axios from 'axios';
import * as actions from './actions';
import * as actionTypes from './types';
import { SERVER } from '../../Api/constants';

function* deleteFilm({ payload }: ReturnType<typeof actions.deleteFilm>) {
  try {
    yield put(actions.deleteFilmRequest());
    yield call(() => axios.delete(`${SERVER}movies/${payload}`));
    yield put(actions.deleteFilmSuccess(payload));
  } catch (e) {
    yield put(actions.deleteFilmFailed(e));
  }
}

function* watchDeleteFilm() {
  yield takeEvery(actionTypes.DELETE_FILM, deleteFilm);
}

export { deleteFilm };

export default watchDeleteFilm;
