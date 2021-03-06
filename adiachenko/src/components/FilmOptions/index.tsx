import React from "react";
import Button from './styles';

interface FilmOptionsProps {
  action: () => void
}

const FilmOptions = ({ action }: FilmOptionsProps) => (
  <Button className="options">
    <span
      className="dots"
      onClick={ action }
    >
      ...
    </span>
  </Button>
);

export default FilmOptions;
