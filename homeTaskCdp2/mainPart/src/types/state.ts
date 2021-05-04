import { EditFilmProps, FilmProps } from './film';

interface SortingStateProps {
  film?: FilmProps,
  films: FilmProps[] | [],
  category: string,
  isSearch: boolean,
  sortBy: string
}

interface StateProps {
  sorting: SortingStateProps,
  films: {
    films: EditFilmProps[]
    film: FilmProps,
    isLoading: boolean,
    error: string
  }
}

export { StateProps };
