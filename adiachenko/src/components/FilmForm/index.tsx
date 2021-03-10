import React, { MouseEvent, useState } from "react";
import Select from 'react-select';
import { ThemeProvider } from "styled-components";
import { Button, ButtonTheme } from "../Button";
import { Form } from "./style";

type initialFilmType = {
    id?: number,
    title: string,
    release_date: string,
    genres: string[],
    overview: string,
    poster_path: string,
    runtime: number
}

type FilmFormProps = {
    film?: initialFilmType,
    edit?: boolean,
    closeForm: () => void
};

const initialFilm: initialFilmType = {
    title: '',
    release_date: '',
    genres: [],
    overview: '',
    poster_path: '',
    runtime: 0
}

const options = [
    { value: 'Fantasy', label: 'Fantasy' },
    { value: 'Adventure', label: 'Adventure' },
    { value: 'Science Fiction', label: 'Science Fiction' },
    { value: 'Drama', label: 'Drama' },
    { value: 'Romance', label: 'Romance' },
    { value: 'Action', label: 'Action' },
    { value: 'Comedy', label: 'Comedy' },
    { value: 'Family', label: 'Family' },
    { value: 'Animation', label: 'Animation' }
];

const customStyles = {
    valueContainer: (provided: any) => ({
        ...provided,
        height: '40px',
        background: 'rgba(79,79,79,0.7)'
    }),
    indicatorsContainer: (provided: any) => ({
        ...provided,
        background: 'rgba(79,79,79,0.7)'
    }),
    menu: (provided: any) => ({
        ...provided,
        background: 'rgb(79,79,79)',
        color: 'white',
        fontSize: '15px'
    }),
    placeholder: (provided: any) => ({
        ...provided,
        color: 'white'
    }),
    control: (provided: any) => ({
        ...provided,
        background: 'rgb(79,79,79)',
    }),
};

const FilmForm = ({film, edit, closeForm}: FilmFormProps) => {
    const [filmSate, setFilm] = useState(film);
    const resetForm = (event: MouseEvent) => {
        event.preventDefault();
        if (edit) {
            setFilm(film);
        } else {
            setFilm(initialFilm);
        }
    };

    const submitForm = (event: MouseEvent, save: boolean) => {
        event.preventDefault();
        console.log(filmSate);
        if (save) {
            console.log('Saved! (Updated)')
        } else {
            console.log('Saved! (Created)')
        }
        closeForm();
    }

    return (
        <Form>
            {
                edit ? <h2>Edit movie</h2> : <h2>Add movie</h2>
            }
            {
                edit && (
                    <label htmlFor="id">
                        <span>Movie Id</span>
                        <p>{film.id}</p>
                    </label>
                )
            }

            <label htmlFor="title">
                <span>Title</span>
                <input
                    name="title"
                    placeholder="Title"
                    value={filmSate.title}
                    onChange={(ev) => setFilm({
                        ...filmSate,
                        title: ev.target.value
                    })}
                />
            </label>

            <label htmlFor="release_date">
                <span>Release date</span>
                <input
                    type="date"
                    name="release_date"
                    placeholder="Select date"
                    value={filmSate.release_date}
                    onChange={(ev) => setFilm({
                        ...filmSate,
                        release_date: ev.target.value
                    })}
                />
            </label>

            <label htmlFor="url">
                <span>Movie URL</span>
                <input
                    name="url"
                    placeholder="Movie URL here"
                    value={filmSate.poster_path}
                    onChange={(ev) => setFilm({
                        ...filmSate,
                        poster_path: ev.target.value
                    })}
                />
            </label>

            <label htmlFor="genre">
                <span>Genre</span>
                <Select
                    name="genre"
                    placeholder="Genre here"
                    styles={customStyles}
                    value={filmSate.genres.map(genre => ({value: genre, label: genre}))}
                    isMulti
                    onChange={(selected: any) => {
                        setFilm({
                            ...filmSate,
                            genres: selected.map((genre:any) => genre.value)
                        });
                    }}
                    options={options}
                />
            </label>

            <label htmlFor="overview">
                <span>Overview</span>
                <input
                    name="overview"
                    placeholder="Overview here"
                    value={filmSate.overview}
                    onChange={(ev) => setFilm({
                        ...filmSate,
                        overview: ev.target.value
                    })}
                />
            </label>

            <label htmlFor="runtime">
                <span>Runtime</span>
                <input
                    name="runtime"
                    placeholder="Runtime here"
                    value={filmSate.runtime}
                    onChange={(ev) => setFilm({
                        ...filmSate,
                        runtime: +ev.target.value
                    })}
                />
            </label>

            <div className="buttons">
                <ThemeProvider theme={ButtonTheme}>
                    <Button
                        className="reset"
                        onClick={(event) => resetForm(event)}
                    >Reset</Button>
                </ThemeProvider>
                {
                    edit ? (
                        <Button
                            onClick={(event) => submitForm(event, true)}
                        >Save</Button>
                    ) : (
                        <Button
                            onClick={(event) => submitForm(event, false)}
                        >Submit</Button>
                    )
                }
            </div>
        </Form>
    )
};

FilmForm.defaultProps = {
    film: initialFilm
}

export default FilmForm;
