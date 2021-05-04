interface FilmProps {
  id?: number;
  title: string;
  tagline?: string;
  // eslint-disable-next-line camelcase
  vote_average?: number;
  // eslint-disable-next-line camelcase
  vote_count?: number;
  // eslint-disable-next-line camelcase
  release_date: string;
  // eslint-disable-next-line camelcase
  poster_path: string;
  overview: string;
  budget?: number;
  revenue?: number;
  genres: string[];
  runtime: number;
}

interface EditFilmProps {
  id: number,
  title: string;
  // eslint-disable-next-line camelcase
  release_date: string;
  // eslint-disable-next-line camelcase
  poster_path: string;
  overview: string;
  genres: string[];
  runtime: number;
}

export { FilmProps, EditFilmProps };
