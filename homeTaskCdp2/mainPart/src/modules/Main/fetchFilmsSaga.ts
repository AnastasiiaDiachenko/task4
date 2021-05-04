import { call, put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';
import * as actions from './actions';
import * as actionTypes from './types';
import { SERVER, FILMS_LIMIT } from '../../Api/constants';

function* fetchFilms({ payload }: ReturnType<typeof actions.fetchFilms>) {
  const config = {
    params: {
      search: payload,
      limit: FILMS_LIMIT,
      searchBy: 'title',
      offset: 0
    }
  };

  try {
    yield put(actions.fetchFilmsRequest());

    const films = yield call(() => axios.get(`${SERVER}movies`, config)
      .then((res) => res.data.data));
    yield put(actions.fetchFilmsSuccess(films));
  } catch (e) {
    yield put(actions.fetchFilmsFailed(e));
  }
}

function* watchFetchFilms() {
  yield takeLatest(actionTypes.FETCH_FILMS, fetchFilms);
}
export { fetchFilms };

export default watchFetchFilms;
