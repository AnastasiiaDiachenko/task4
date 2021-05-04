import * as actionTypes from './types';
import { FilmProps, EditFilmProps } from '../../types/film';

const fetchFilmsRequest = () => ({
  type: actionTypes.FETCH_FILMS_REQUEST
});

const fetchFilms = (data: string) => ({
  type: actionTypes.FETCH_FILMS,
  payload: data
});

const fetchFilmsFailed = (data: string) => ({
  type: actionTypes.FETCH_FILMS_FAILED,
  payload: data
});

const fetchFilmsSuccess = (data: FilmProps[]) => ({
  type: actionTypes.FETCH_FILMS_SUCCESS,
  payload: data
});

const fetchFilmRequest = () => ({
  type: actionTypes.FETCH_FILM_REQUEST
});

const fetchFilm = (id: number) => ({
  type: actionTypes.FETCH_FILM,
  payload: id
});

const fetchFilmFailed = (data: string) => ({
  type: actionTypes.FETCH_FILM_FAILED,
  payload: data
});

const fetchFilmSuccess = (data: FilmProps) => ({
  type: actionTypes.FETCH_FILM_SUCCESS,
  payload: data
});

const createFilm = (film: FilmProps) => ({
  type: actionTypes.CREATE_FILM,
  payload: film
});

const createFilmRequest = () => ({
  type: actionTypes.CREATE_FILM_REQUEST
});

const createFilmFailed = (data: string) => ({
  type: actionTypes.CREATE_FILM_FAILED,
  payload: data
});

const createFilmSuccess = (film: EditFilmProps) => ({
  type: actionTypes.CREATE_FILM_SUCCESS,
  payload: film
});

const editFilm = (film: EditFilmProps) => ({
  type: actionTypes.EDIT_FILM,
  payload: film
});

const editFilmRequest = () => ({
  type: actionTypes.EDIT_FILM_REQUEST
});

const editFilmFailed = (data: string) => ({
  type: actionTypes.EDIT_FILM_FAILED,
  payload: data
});

const editFilmSuccess = (film: EditFilmProps) => ({
  type: actionTypes.EDIT_FILM_SUCCESS,
  payload: film
});

const deleteFilm = (id: number) => ({
  type: actionTypes.DELETE_FILM,
  payload: id
});

const deleteFilmRequest = () => ({
  type: actionTypes.DELETE_FILM_REQUEST
});

const deleteFilmFailed = (data: string) => ({
  type: actionTypes.DELETE_FILM_FAILED,
  payload: data
});

const deleteFilmSuccess = (data: number) => ({
  type: actionTypes.DELETE_FILM_SUCCESS,
  payload: data
});

export {
  fetchFilms,
  fetchFilmsRequest,
  fetchFilmsFailed,
  fetchFilmsSuccess,
  fetchFilm,
  fetchFilmRequest,
  fetchFilmFailed,
  fetchFilmSuccess,
  createFilm,
  createFilmRequest,
  createFilmFailed,
  createFilmSuccess,
  editFilm,
  editFilmRequest,
  editFilmFailed,
  editFilmSuccess,
  deleteFilm,
  deleteFilmRequest,
  deleteFilmFailed,
  deleteFilmSuccess
};
