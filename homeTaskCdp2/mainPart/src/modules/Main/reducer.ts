import { AnyAction } from 'redux';
import * as actionTypes from './types';

const initialState = {
  isLoading: false,
  error: false,
  // @ts-ignore
  films: [],
  // @ts-ignore
  film: null
};

const filmsReducer = (state = initialState, action: AnyAction) => {
  switch (action.type) {
    case actionTypes.FETCH_FILMS_REQUEST:
      return { ...state, isLoading: true };
    case actionTypes.FETCH_FILMS_SUCCESS:
      return { ...state, films: action.payload, isLoading: false };
    case actionTypes.FETCH_FILMS_FAILED:
      return { ...state, error: action.payload, isLoading: false };
    case actionTypes.CREATE_FILM_SUCCESS:
      return {
        ...state,
        films: [action.payload, ...state.films]
      };
    case actionTypes.EDIT_FILM_SUCCESS:
      return {
        ...state,
        films: [...state.films].map((film) => {
          if (film.id === action.payload.id) {
            return action.payload;
          }
          return film;
        }),
        film: action.payload
      };
    case actionTypes.DELETE_FILM_SUCCESS:
      return {
        ...state,
        films: [...state.films].filter((film) => (film.id !== action.payload))
      };
    case actionTypes.FETCH_FILM_SUCCESS:
      return { ...state, film: action.payload };
    default:
      return state;
  }
};

export default filmsReducer;
