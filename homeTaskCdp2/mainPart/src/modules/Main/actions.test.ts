import * as actions from './actions';
import * as types from './types';

const payload = 'test';
const mockFilm = {
  title: 'test',
  release_date: '2021-04-14',
  genres: ['Fantasy'],
  overview: 'test',
  poster_path: 'https://image.tmdb.org/t/p/w500/pU1ULUq8D3iRxl1fdX2lZIzdHuI.jpg',
  runtime: 30
};
const editFilm = {
  id: 444,
  ...mockFilm
};

describe('actions', () => {
  it('should create an action to FETCH_FILMS', () => {
    const expectedAction = {
      type: types.FETCH_FILMS,
      payload
    };

    expect(actions.fetchFilms(payload))
      .toEqual(expectedAction);
  });

  it('should create an action to FETCH_FILMS_FAILED', () => {
    const expectedAction = {
      type: types.FETCH_FILMS_FAILED,
      payload
    };

    expect(actions.fetchFilmsFailed(payload))
      .toEqual(expectedAction);
  });

  it('should create an action to FETCH_FILMS_REQUEST', () => {
    const expectedAction = {
      type: types.FETCH_FILMS_REQUEST
    };

    expect(actions.fetchFilmsRequest())
      .toEqual(expectedAction);
  });

  it('should create an action to FETCH_FILMS_SUCCESS', () => {
    const expectedAction = {
      type: types.FETCH_FILMS_SUCCESS,
      payload: [mockFilm]
    };

    expect(actions.fetchFilmsSuccess([mockFilm]))
      .toEqual(expectedAction);
  });

  it('should create an action to FETCH_FILM', () => {
    const expectedAction = {
      type: types.FETCH_FILM,
      payload: 444
    };

    expect(actions.fetchFilm(444))
      .toEqual(expectedAction);
  });

  it('should create an action to FETCH_FILM_REQUEST', () => {
    const expectedAction = {
      type: types.FETCH_FILM_REQUEST
    };

    expect(actions.fetchFilmRequest())
      .toEqual(expectedAction);
  });

  it('should create an action to FETCH_FILM_FAILED', () => {
    const expectedAction = {
      type: types.FETCH_FILM_FAILED,
      payload
    };

    expect(actions.fetchFilmFailed(payload))
      .toEqual(expectedAction);
  });

  it('should create an action to FETCH_FILM_SUCCESS', () => {
    const expectedAction = {
      type: types.FETCH_FILM_SUCCESS,
      payload: mockFilm
    };

    expect(actions.fetchFilmSuccess(mockFilm))
      .toEqual(expectedAction);
  });

  it('should create an action to CREATE_FILM', () => {
    const expectedAction = {
      type: types.CREATE_FILM,
      payload: mockFilm
    };

    expect(actions.createFilm(mockFilm))
      .toEqual(expectedAction);
  });

  it('should create an action to CREATE_FILM_REQUEST', () => {
    const expectedAction = {
      type: types.CREATE_FILM_REQUEST
    };

    expect(actions.createFilmRequest())
      .toEqual(expectedAction);
  });

  it('should create an action to CREATE_FILM_FAILED', () => {
    const expectedAction = {
      type: types.CREATE_FILM_FAILED,
      payload
    };

    expect(actions.createFilmFailed(payload))
      .toEqual(expectedAction);
  });

  it('should create an action to CREATE_FILM_SUCCESS', () => {
    const expectedAction = {
      type: types.CREATE_FILM_SUCCESS,
      payload: editFilm
    };

    expect(actions.createFilmSuccess(editFilm))
      .toEqual(expectedAction);
  });

  it('should create an action to EDIT_FILM', () => {
    const expectedAction = {
      type: types.EDIT_FILM,
      payload: editFilm
    };

    expect(actions.editFilm(editFilm))
      .toEqual(expectedAction);
  });

  it('should create an action to EDIT_FILM_REQUEST', () => {
    const expectedAction = {
      type: types.EDIT_FILM_REQUEST
    };

    expect(actions.editFilmRequest())
      .toEqual(expectedAction);
  });

  it('should create an action to EDIT_FILM_FAILED', () => {
    const expectedAction = {
      type: types.EDIT_FILM_FAILED,
      payload
    };

    expect(actions.editFilmFailed(payload))
      .toEqual(expectedAction);
  });

  it('should create an action to EDIT_FILM_SUCCESS', () => {
    const expectedAction = {
      type: types.EDIT_FILM_SUCCESS,
      payload: editFilm
    };

    expect(actions.editFilmSuccess(editFilm))
      .toEqual(expectedAction);
  });

  it('should create an action to DELETE_FILM', () => {
    const expectedAction = {
      type: types.DELETE_FILM,
      payload: 4
    };

    expect(actions.deleteFilm(4))
      .toEqual(expectedAction);
  });

  it('should create an action to DELETE_FILM_FAILED', () => {
    const expectedAction = {
      type: types.DELETE_FILM_FAILED,
      payload
    };

    expect(actions.deleteFilmFailed(payload))
      .toEqual(expectedAction);
  });

  it('should create an action to DELETE_FILM_SUCCESS', () => {
    const expectedAction = {
      type: types.DELETE_FILM_SUCCESS,
      payload: 444
    };

    expect(actions.deleteFilmSuccess(444))
      .toEqual(expectedAction);
  });

  it('should create an action to DELETE_FILM_REQUEST', () => {
    const expectedAction = {
      type: types.DELETE_FILM_REQUEST
    };

    expect(actions.deleteFilmRequest())
      .toEqual(expectedAction);
  });
});
