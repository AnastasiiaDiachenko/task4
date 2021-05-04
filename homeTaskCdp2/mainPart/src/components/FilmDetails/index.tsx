import React from 'react';
import { Link } from 'react-router-dom';
import MainLogo from '../MainLogo';
import { FilmProps } from '../../types/film';
import { Button } from '../Button';
import {
  Duration,
  TitleWrapper,
  PosterWrapper,
  Poster
} from './styles';

interface FilmDetailsProps {
  film: FilmProps
}

const FilmDetails = ({ film }: FilmDetailsProps) => (
  <>
    <div className="wrapper">
      <MainLogo />
      <Link to="/">
        <Button>Search</Button>
      </Link>
    </div>
    <div className="film-details">
      <PosterWrapper>
        <Poster src={film.poster_path} alt="Poster" />
      </PosterWrapper>
      <div>
        <TitleWrapper>
          <h2>{film.title}</h2>
          <span>{film.vote_average ? film.vote_average : '?'}</span>
        </TitleWrapper>

        <Duration>
          <span>{film.release_date}</span>
          <span>
            {film.runtime}
            {' '}
            min
          </span>
        </Duration>

        <p>
          {film.overview}
        </p>
      </div>
    </div>
  </>
);

export { FilmDetails };
