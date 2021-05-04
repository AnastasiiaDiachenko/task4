import { StateProps } from '../../types/state';

const getFilms = (state: StateProps) => state.films.films;
const getFilm = (state: StateProps) => state.films.film;
const getIsLoading = (state: StateProps) => state.films.isLoading;

export {
  getFilms,
  getFilm,
  getIsLoading
};
