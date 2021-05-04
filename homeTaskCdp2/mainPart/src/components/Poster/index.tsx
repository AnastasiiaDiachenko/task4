import styled from 'styled-components';
import React, { useState } from 'react';
import errorImg from '../../assets/images/error.png';

const Poster = styled.img`
  max-width: 350px;
  height: 525px;
`;

interface FilmPosterProps {
  poster: string,
  title: string
}

const FilmPoster = ({ poster, title }: FilmPosterProps) => {
  const [imagePath, setImagePath] = useState(poster);
  const onError = () => setImagePath(errorImg);

  return (
    <Poster
      src={imagePath}
      alt={title}
      onError={onError}
    />
  );
};

export default FilmPoster;
