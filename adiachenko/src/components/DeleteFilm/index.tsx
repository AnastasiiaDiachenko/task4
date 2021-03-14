import React from "react";
import {Button} from "../Button";
import styled from 'styled-components';

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

const DeleteFilm = ({deleteFilm}: DeleteFilmProps) => (
    <>
        <header>
            Delete Movie
        </header>
        <Body>
            <p>Are you sure you want to delete this movie?</p>
            <Button onClick={() => deleteFilm()}>
                Confirm
            </Button>
        </Body>
    </>
);

export default DeleteFilm;