import { call, put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';
import * as actions from './actions';
import * as actionTypes from './types';
import { SERVER } from '../../Api/constants';

function* fetchFilm({ payload }: ReturnType<typeof actions.fetchFilm>) {
  try {
    yield put(actions.fetchFilmRequest());
    const film = yield call(() => axios.get(`${SERVER}movies/${payload}`)
      .then((res) => res.data));
    yield put(actions.fetchFilmSuccess(film));
  } catch (e) {
    yield put(actions.fetchFilmFailed(e));
  }
}

function* watchFetchFilm() {
  yield takeLatest(actionTypes.FETCH_FILM, fetchFilm);
}

export { fetchFilm };

export default watchFetchFilm;
