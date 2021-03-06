import React, { useState } from 'react';
import FilmProps from '../../types/types';
import FilmStyled from "./style";
import FilmActions from "../FilmActions";
import FilmInfo from "../FilmInfo";
import FilmOptions from "../FilmOptions";

type FilmsProps = {
  film: FilmProps
}

const Film = ({film}: FilmsProps) => {

  const [isActionsVisible, setActionsVisible] = useState(false);
  const release = film.release_date.split('-')[0];

  const hideActions = () => setActionsVisible(false);
  const showActions = () => setActionsVisible(true);

  return (
    <FilmStyled>
      {
        isActionsVisible &&
          <FilmActions action={ hideActions } />
      }
      <FilmOptions action={ showActions } />

      <FilmInfo
        title={film.title}
        release={release}
        genres={film.genres}
        poster_path={film.poster_path}
      />
    </FilmStyled>
  )
};

export default Film;
