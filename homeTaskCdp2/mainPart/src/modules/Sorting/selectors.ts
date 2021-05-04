import { createSelector } from 'reselect';
import { sortByDateStringProperty, sortByRating } from '../../helpers/utils';
import { StateProps } from '../../types/state';
import { FilmProps } from '../../types/film';
import { getFilms } from '../Main/selectors';

const getCategory = (state: StateProps) => state.sorting.category;
const getSortBy = (state: StateProps) => state.sorting.sortBy;

// PATTERN: reselect selectors
const getVisibleFilms = createSelector(
  [getCategory, getSortBy, getFilms],
  (category: string, sortBy: string, films: FilmProps[]) => {
    let filmsList: FilmProps[] = films;

    if (category !== 'All') {
      // @ts-ignore
      filmsList = filmsList.filter((film: FilmProps) => film.genres.includes(category));
    }

    if (sortBy === 'release') {
      filmsList = [...filmsList].sort(sortByDateStringProperty('release_date'));
    }

    if (sortBy === 'rating') {
      filmsList = [...filmsList].sort(sortByRating);
    }

    return filmsList;
  }
);

export {
  getCategory,
  getSortBy,
  getVisibleFilms
};
