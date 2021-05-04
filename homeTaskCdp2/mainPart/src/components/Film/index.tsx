import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { FilmProps } from '../../types/film';
import FilmStyled from './style';
import FilmActions from '../FilmActions';
import FilmInfo from '../FilmInfo';
import FilmOptions from '../FilmOptions';
import MainForm from '../MainForm';
import PopUp from '../PopUp';
import FilmPoster from '../Poster';
import DeleteFilm from '../DeleteFilm';
import { useToggle } from '../../helpers/hooks';
import { deleteFilm } from '../../modules/Main/actions';

type FilmsProps = {
  film: FilmProps
}

const Film = ({ film }: FilmsProps) => {
  const [isActionsVisible, toggleActions] = useToggle(false);
  const [isFormActive, toggleForm] = useToggle(false);
  const [isDeleteOpen, toggleDelete] = useToggle(false);
  const release = film.release_date.split('-')[0];
  const dispatch = useDispatch();

  const openDelete = () => {
    toggleDelete();
    toggleActions();
  };

  const openEdit = () => {
    toggleForm();
    toggleActions();
  };

  const removeFilm = () => {
    dispatch(deleteFilm(film.id));
    toggleDelete();
  };

  // PATTERN: conditional rendering
  return (
    <FilmStyled>
      {
        isActionsVisible
          && (
          <FilmActions
            close={toggleActions}
            openEdit={openEdit}
            openDelete={openDelete}
          />
          )
      }
      <FilmOptions action={toggleActions} />
      <div className="rating">
        {film.vote_average ? film.vote_average : '?'}
      </div>
      <Link to={`/film/${film.id}`}>
        <FilmPoster
          poster={film.poster_path}
          title={film.title}
        />
      </Link>

      <FilmInfo
        title={film.title}
        release={release}
        genres={film.genres}
      />

      {
        isFormActive && (
        <PopUp
          closeForm={toggleForm}
        >
          <MainForm
            closeForm={toggleForm}
            film={film}
            edit
          />
        </PopUp>
        )
      }
      {
          isDeleteOpen && (
          <PopUp
            closeForm={toggleDelete}
          >
            <DeleteFilm
              deleteFilm={removeFilm}
            />
          </PopUp>
          )
      }
    </FilmStyled>
  );
};

export default React.memo(Film);
