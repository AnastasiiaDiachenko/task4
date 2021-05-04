import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import HeaderStyled from './style';
import poster from '../../assets/images/poster.jpg';
import MainForm from '../MainForm';
import PopUp from '../PopUp';
import { Search } from '../SearchFiled';
import { FilmDetails } from '../FilmDetails';
import { useToggle } from '../../helpers/hooks';
import { getFilm } from '../../modules/Main/selectors';
import { fetchFilm } from '../../modules/Main/actions';

const Header = () => {
  // @ts-ignore
  const { id } = useParams();
  const [isFormActive, toggleForm] = useToggle(false);
  const film = useSelector(getFilm);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchFilm(id));
  }, [id]);

  return (
    <HeaderStyled>
      <div className="img-wrapper">
        <img
          src={poster}
          alt="Poster"
        />
      </div>

      <div className="position">
        <div className="content-wrapper">
          {
            id && film ? <FilmDetails film={film} />
              : <Search openForm={toggleForm} />
          }
        </div>

        {
          isFormActive ? (
            <PopUp
              closeForm={toggleForm}
            >
              <MainForm
                closeForm={toggleForm}
              />
            </PopUp>
          ) : null
        }
      </div>
    </HeaderStyled>
  );
};

export default React.memo(Header);
