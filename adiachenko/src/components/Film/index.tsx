import React, { useState } from 'react';
import FilmProps from '../../types/types';
import FilmStyled from "./style";
import FilmActions from "../FilmActions";
import FilmInfo from "../FilmInfo";
import FilmOptions from "../FilmOptions";
import FilmForm from "../FilmForm";
import { PopUp } from "../PopUp";
import DeleteFilm from "../DeleteFilm";
import styled from "styled-components";
import AppContext from "../../helpers/context";

const Poster = styled.img`
  max-width: 350px;
  height: 525px;
`;

type FilmsProps = {
  film: FilmProps
}

const Film = ({film}: FilmsProps) => {

  const [isActionsVisible, setActionsVisible] = useState(false);
  const [isFormActive, setFormActive] = useState(false);
  const [isDeleteOpen, setDeleteOpen] = useState(false);
  const release = film.release_date.split('-')[0];

  const hideActions = () => setActionsVisible(false);
  const showActions = () => setActionsVisible(true);

  const closeForm = () => setFormActive(false);
  const closeDeleteForm = () => setDeleteOpen(false);

  const openDelete = () => {
      setDeleteOpen(true);
      hideActions();
  };

  const openEdit = () => {
      setFormActive(true);
      hideActions();
  };


  const deleteFilm = () => {
      console.log('Deleted ! ' + film.id);
      closeDeleteForm();
  };

  return (
    <FilmStyled>
      {
        isActionsVisible &&
          <FilmActions
              close={ hideActions }
              openEdit={ openEdit }
              openDelete={ openDelete }
          />
      }
      <FilmOptions action={ showActions } />

      <AppContext.Consumer>
          {value =>
              <a
                  href="#"
                  onClick={() => value.setFilm(film)}
              >
                  <Poster
                      src={film.poster_path}
                      alt={film.title}
                  />
              </a>
          }

      </AppContext.Consumer>

      <FilmInfo
        title={film.title}
        release={release}
        genres={film.genres}
      />

      {
        isFormActive && (
            <PopUp
                closeForm={closeForm}
            >
                <FilmForm
                    closeForm={closeForm}
                    film={film}
                    edit
                />
            </PopUp>
        )
      }
      {
          isDeleteOpen && (
              <PopUp
                  closeForm={closeDeleteForm}
              >
                  <DeleteFilm
                      deleteFilm={deleteFilm}
                  />
              </PopUp>
          )
      }
    </FilmStyled>
  )
};

export default Film;
