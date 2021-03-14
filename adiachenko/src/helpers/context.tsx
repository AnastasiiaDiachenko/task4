import React from "react";
import FilmProps from "../types/types";

const AppContext = React.createContext({
    film: null,
    setFilm: (film: FilmProps) => null
});

export default AppContext;