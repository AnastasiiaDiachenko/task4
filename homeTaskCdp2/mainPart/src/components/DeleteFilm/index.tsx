import React from 'react';
import styled from 'styled-components';
import { Button } from '../Button';

type DeleteFilmProps = {
    deleteFilm: () => void
}

const Body = styled.div`
    display: flex;
    flex-direction: column;
    
    button {
      align-self: flex-end;
    }
`;

const DeleteFilm = ({ deleteFilm }: DeleteFilmProps) => (
  <>
    <header>
      Delete Movie
    </header>
    <Body>
      <p>Are you sure you want to delete this movie?</p>
      <Button
        onClick={() => deleteFilm()}
        data-testid="confirm-delete"
      >
        Confirm
      </Button>
    </Body>
  </>
);

export default DeleteFilm;
