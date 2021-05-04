import React from 'react';
import Button from './styles';

interface FilmOptionsProps {
  action: () => void
}

const FilmOptions = ({ action }: FilmOptionsProps) => (
  <Button className="options">
    <span
      className="dots"
      onClick={action}
      data-testid="options"
    >
      ...
    </span>
  </Button>
);

export default React.memo(FilmOptions);
