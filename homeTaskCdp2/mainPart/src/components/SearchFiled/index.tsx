import React, { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import MainLogo from '../MainLogo';
import { Button, ButtonTheme } from '../Button';

interface SortProps {
  openForm: () => void
}

const Search = ({ openForm }: SortProps) => {
  // @ts-ignore
  const { title } = useParams();
  const [value, setValue] = useState(title || '');

  return (
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
        <input
          className="search-input"
          placeholder="What do you want to watch?"
          value={value}
          onChange={(ev) => setValue(ev.target.value)}
        />

        <Link to={`/search/${value}`}>
          <Button>
            Search
          </Button>
        </Link>
      </div>
    </>
  );
};

export { Search };
