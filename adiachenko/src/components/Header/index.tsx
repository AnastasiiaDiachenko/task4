import React, {useState} from 'react';
import HeaderStyled from "./style";
import poster from "../../assets/images/poster.jpg";
import FilmForm from "../FilmForm";
import { PopUp } from "../PopUp"
import {Search} from "../SearchFiled";
import {FilmDetails} from "../FilmDetails";
import AppContext from "../../helpers/context";

interface HeaderProps {
    isSearch: boolean,
    openSearch: () => void
}

const Header = ({isSearch, openSearch}: HeaderProps) => {

  const [isFormActive, setFormActive] = useState(false);
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
                    <AppContext.Consumer>
                        {value =>
                            <FilmDetails openSearch={openSearch} film={value.film} />
                        }
                    </AppContext.Consumer>
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
