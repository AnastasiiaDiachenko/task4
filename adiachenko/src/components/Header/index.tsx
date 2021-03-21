import React, {useState} from 'react';
import HeaderStyled from "./style";
import poster from "../../assets/images/poster.jpg";
import FilmForm from "../FilmForm";
import PopUp from "../PopUp"
import {Search} from "../SearchFiled";
import {FilmDetails} from "../FilmDetails";
import {useAppContext} from "../../helpers/context";

interface HeaderProps {
    isSearch: boolean,
    openSearch: () => void
}

const Header = ({isSearch, openSearch}: HeaderProps) => {

  const [isFormActive, setFormActive] = useState(false);
  const contextValue = useAppContext();
  const closeForm = () => setFormActive(false);
  const openForm = () => setFormActive(true);

  return (
    <HeaderStyled>
      <div className="img-wrapper">
        <img
          src={ poster }
          alt="Poster"
        />
      </div>

      <div className="position">
        <div className="content-wrapper">
          {
            isSearch ? <Search openForm={openForm} /> :
              <FilmDetails openSearch={openSearch} film={contextValue.film} />
          }
        </div>

        {
          isFormActive ? (
              <PopUp
                  closeForm={closeForm}
              >
                <FilmForm
                    closeForm={closeForm}
                />
              </PopUp>
          ) : null
        }
      </div>
    </HeaderStyled>
  )
};

export default Header;
