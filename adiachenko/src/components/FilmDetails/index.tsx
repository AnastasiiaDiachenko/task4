import React from "react";
import MainLogo from "../MainLogo";
import FilmProps from "../../types/types";
import styled from "styled-components";
import {variables} from "../../helpers/styleVariables";
import {Button} from "../Button";

const Poster = styled.img`
  max-width: 200px;
`;

const PosterWrapper = styled.div`
  min-width: 200px;
  height: 300px;
  background-color: lightblue;;
  margin-right: 15px;
`;

const TitleWrapper = styled.div`
  display: flex;
  align-items: baseline;
  font-size: 25px;
  
  h2 {
    padding-right: 15px;
  }
  
  span {
    padding: 10px;
    border: 4px solid #${variables.colors.LOGO};
    border-radius: 50%;
    min-width: 35px;
    text-align: center;
  }
`;

const Duration = styled.div`
  font-size: 25px;
  color: #${variables.colors.LOGO};
  
  span {
    padding-right: 40px;
  }
`;

interface FilmDetailsProps {
    openSearch: () => void,
    film: FilmProps
}

const FilmDetails = ({openSearch, film}: FilmDetailsProps) => (
    <>
        <div className="wrapper">
            <MainLogo />
            <Button onClick={() => openSearch()}>Search</Button>
        </div>
        <div className="film-details">
            <PosterWrapper>
                <Poster src={film.poster_path} alt="Poster" />
            </PosterWrapper>
            <div>
                <TitleWrapper>
                    <h2>{film.title}</h2>
                    <span>{film.vote_average}</span>
                </TitleWrapper>

                <Duration>
                    <span>{film.release_date}</span>
                    <span>{film.runtime} min</span>
                </Duration>

                <p>
                    {film.overview}
                </p>
            </div>
        </div>
    </>
);

export {FilmDetails};