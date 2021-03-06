import React, { useEffect, useState } from "react";
import filmsConfig from "../../helpers/config";
import Film from "../Film";
import FilmProps from '../../types/types';
import styled from 'styled-components';

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
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);

    setTimeout(() => {
      setFilms(filmsConfig);

      setLoading(false);
    }, 5000);
  }, []);

  const filmsList = films.map((film: FilmProps) =>
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
                      { films.length } movies found
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
