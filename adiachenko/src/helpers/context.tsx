import React, { useContext } from "react";
import FilmProps from "../types/types";

const AppContext = React.createContext({
    film: null,
    sortCategory: 'all',
    setCategory: (category: string) => null,
    setFilm: (film: FilmProps) => null
});

const useAppContext = () => useContext(AppContext);

export { AppContext, useAppContext };