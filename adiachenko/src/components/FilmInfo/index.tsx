import React from "react";
import styled from "styled-components";

const Poster = styled.img`
  max-width: 350px;
  height: 525px;
`;

const Info = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  .release {
    border: solid 1px gray;
    border-radius: 4px;
    padding: 3px 15px;
  }
`;

const Genre = styled.div`
  color: gray;
  padding: 10px 0;
`;

type FilmInfoProps = {
  title: string,
  release: string,
  genres: string[]
};

const FilmInfo = (
  {
    title,
    release,
    genres
  }: FilmInfoProps) => (
  <>
    <Info>
        <span>
          { title }
        </span>
      <div className="release">
        { release }
      </div>
    </Info>

    <Genre>
      { genres.join("\ud8ff") }
    </Genre>
  </>
);

export default FilmInfo;

