import React from 'react';
import MainLogo from "../MainLogo";
import {ThemeProvider} from "styled-components";
import {Button, ButtonTheme} from "../Button";

interface SortProps {
    openForm: () => void
}

const Search = ({openForm}: SortProps) => (
    <>
        <div className="wrapper">
            <MainLogo />
            <ThemeProvider theme={ButtonTheme}>
                <Button onClick={() => openForm()}>
                    + Add movie
                </Button>
            </ThemeProvider>
        </div>

        <h1 className="title">
            Find your movie
        </h1>

        <div className="search-wrapper">
            <input className="search-input" placeholder="What do you want to watch?" />

            <Button>
                Search
            </Button>
        </div>
    </>
);

export {Search};