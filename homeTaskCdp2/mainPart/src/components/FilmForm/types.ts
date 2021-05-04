type initialFilmType = {
  id?: number,
  title: string,
  // eslint-disable-next-line camelcase
  release_date: string,
  genres: string[],
  overview: string,
  // eslint-disable-next-line camelcase
  poster_path: string,
  runtime: number
}

type FilmFormProps = {
  film?: initialFilmType,
  edit?: boolean,
  closeForm: () => void
};

const initialFilm: initialFilmType = {
  title: '',
  release_date: '',
  genres: [],
  overview: '',
  poster_path: '',
  runtime: 30
};

export {
  FilmFormProps,
  initialFilm
};
