import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getVisibleFilms } from '../../modules/Sorting/selectors';
import { getFilms, getIsLoading } from '../../modules/Main/selectors';
import Film from '../Film';
import { FilmProps } from '../../types/film';
import { FilmsStyled, FoundCountStyled, NoFound } from './styles';
import { fetchFilms } from '../../modules/Main/actions';

const FilmsList = () => {
  const dispatch = useDispatch();
  const sortedFilms = useSelector(getVisibleFilms);
  const films = useSelector(getFilms);
  const isLoading = useSelector(getIsLoading);
  // @ts-ignore
  const { title } = useParams();

  useEffect(() => {
    if (title) dispatch(fetchFilms(title));
  }, [title]);

  const filmsList = sortedFilms.map((film: FilmProps) => (
    <li key={film.id}>
      <Film film={film} />
    </li>
  ));

  return (
    <>
      {
        isLoading && films !== undefined ? <p>Loading...</p>
          : (
            <>
              {
                sortedFilms.length > 0 ? (
                  <>
                    <FoundCountStyled>
                      { sortedFilms.length }
                      {' '}
                      movies found
                    </FoundCountStyled>
                    <FilmsStyled>
                      {filmsList}
                    </FilmsStyled>
                  </>
                ) : (
                  <NoFound>No films found</NoFound>
                )
              }
            </>
          )
      }
    </>
  );
};

export default FilmsList;
