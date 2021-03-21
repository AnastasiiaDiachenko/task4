import React, {useCallback, useEffect, useState} from "react";
import filmsConfig from "../../helpers/config";
import Film from "../Film";
import FilmProps from '../../types/types';
import styled from 'styled-components';
import {useAppContext} from "../../helpers/context";

const FilmsStyled = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  padding: 0;
  margin: 0;
  
  li {
    padding: 2rem;
  }
`;

const FoundCountStyled = styled.div`
  font-size: 20px;
  color: white;
  padding: 10px 0;
`;

const FilmsList = () => {

  const [films, setFilms] = useState([]);
  const [sortedFilms, setSortedFilms] = useState([]);
  const [isLoading, setLoading] = useState(false);
  const contextValue = useAppContext();

  const sortingByCategory = useCallback((filmsList: FilmProps[], type: string) => {
    if (type === 'All') {
      return filmsList;
    }

    return filmsList.filter(film => film.genres.includes(type))
  }, []);

  useEffect(() => {
    setLoading(true);

    setTimeout(() => {
      setFilms(filmsConfig);
      setSortedFilms(filmsConfig);

      setLoading(false);
    }, 5000);
  }, []);

  useEffect(() => {
    setSortedFilms(sortingByCategory(films, contextValue.sortCategory));
  }, [contextValue.sortCategory]);

  const filmsList = sortedFilms.map((film: FilmProps) =>
    <li key={film.id}>
      <Film film={film} />
    </li>
  );
  
  return (
    <>
      {
        isLoading ? <p>Loading...</p> :
          (
            <>
              {
                films.length > 0 ? (
                  <>
                    <FoundCountStyled>
                      { sortedFilms.length } movies found
                    </FoundCountStyled>
                    <FilmsStyled>
                      {filmsList}
                    </FilmsStyled>
                  </>
                ) : (
                  <p>No films found</p>
                )
              }
            </>
          )
      }
    </>
  )
};

export default FilmsList;
