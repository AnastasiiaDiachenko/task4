import React from 'react';
import { ThemeProvider } from "styled-components";
import { variables } from '../../helpers/styleVariables';
import MainLogo from "../MainLogo";
import HeaderStyled from "./style";
import Button from "../Button";
import poster from "../../assets/images/poster.jpg";

const AddBtnTheme = {
  color: `#${variables.background.BUTTON}`,
  bg_color: `${variables.background.BUTTON2}`,
  padding: '10px'
};

const Header = () => (
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
          <ThemeProvider theme={AddBtnTheme}>
            <Button>
              + Add movie
            </Button>
          </ThemeProvider>
        </div>
  
        <h1 className="title">
          Find your movie
        </h1>
  
        <div className="search-wrapper">
          <input placeholder="What do you want to watch?" />
  
          <Button>
            Search
          </Button>
        </div>
      </div>
    </div>
  </HeaderStyled>
);

export default Header;
