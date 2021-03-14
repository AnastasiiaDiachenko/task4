import React, {useState} from 'react';
import { ThemeProvider } from "styled-components";
import MainLogo from "../MainLogo";
import HeaderStyled from "./style";
import { Button, ButtonTheme } from "../Button";
import poster from "../../assets/images/poster.jpg";
import FilmForm from "../FilmForm";
import { PopUp } from "../PopUp"

const Header = () => {

  const [isFormActive, setFormActive] = useState(false);
  const closeForm = () => setFormActive(false);

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
          <div className="wrapper">
            <MainLogo />
            <ThemeProvider theme={ButtonTheme}>
              <Button onClick={() => setFormActive(true)}>
                + Add movie
              </Button>
            </ThemeProvider>
          </div>

          <h1 className="title">
            Find your movie
          </h1>

          <div className="search-wrapper">
            <input className="search-input" placeholder="What do you want to watch?" />

            <Button>
              Search
            </Button>
          </div>
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
