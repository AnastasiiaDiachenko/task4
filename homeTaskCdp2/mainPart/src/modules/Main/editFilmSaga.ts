import { call, put, takeEvery } from 'redux-saga/effects';
import axios from 'axios';
import * as actions from './actions';
import * as actionTypes from './types';
import { SERVER } from '../../Api/constants';

function* editFilm({ payload }: ReturnType<typeof actions.editFilm>) {
  try {
    yield put(actions.editFilmRequest());

    const film = yield call(() => axios.put(`${SERVER}movies`, { ...payload }));

    yield put(actions.editFilmSuccess(film.data));
  } catch (e) {
    yield put(actions.editFilmFailed(e));
  }
}

function* watchEditFilm() {
  yield takeEvery(actionTypes.EDIT_FILM, editFilm);
}

export { editFilm };

export default watchEditFilm;
