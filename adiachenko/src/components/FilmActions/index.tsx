import React from "react";
import Actions from './styles';

interface FilmActionsProps {
  action: () => void
}

const FilmActions = ({action}: FilmActionsProps) => (
  <Actions>
    <button
      className="close"
      onClick={action}
    >
      X
    </button>
    <button>Edit</button>
    <button>Delete</button>
  </Actions>
);

export default FilmActions;
