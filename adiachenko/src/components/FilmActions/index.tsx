import React from "react";
import Actions from './styles';

interface FilmActionsProps {
  close: () => void,
  openEdit: () => void,
  openDelete: () => void
}

const FilmActions = ({close, openEdit, openDelete}: FilmActionsProps) => (
  <Actions>
    <button
      className="close"
      onClick={close}
    >
      X
    </button>
    <button onClick={() => openEdit()}>
        Edit
    </button>
    <button onClick={() => openDelete()}>
        Delete
    </button>
  </Actions>
);

export default React.memo(FilmActions);
