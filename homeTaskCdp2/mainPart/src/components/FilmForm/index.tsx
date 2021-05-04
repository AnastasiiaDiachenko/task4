import React, { useCallback } from 'react';
import CustomInput from '../CustomInput';
import MultiSelectField from '../MultiSelectField';

type genreSelectedType = {
  value: string,
  label: string
}

  // PATTERN: props destructoring
const FilmForm = ({
  values, errors, handleChange, touched, setFieldValue, handleBlur, setTouched
}: any) => {
  // PATTERN: moized cllback
  const setGenres = useCallback((selected: genreSelectedType[]) => {
    setFieldValue('genres', selected.map((genre: genreSelectedType) => genre.value));
    setTouched(
      {
        ...touched,
        genres: true
      }
    );
  }, [touched]);

  return (
    <>
      <CustomInput
        name="title"
        text="Title"
        value={values.title}
        handleChange={handleChange}
        onBlur={handleBlur}
        error={errors.title}
        touched={touched.title}
        type="text"
      />

      <CustomInput
        name="release_date"
        text="Select date"
        value={values.release_date}
        handleChange={handleChange}
        onBlur={handleBlur}
        error={errors.release_date}
        touched={touched.release_date}
        type="date"
      />

      <CustomInput
        name="poster_path"
        text="Movie URL"
        value={values.poster_path}
        onBlur={handleBlur}
        handleChange={handleChange}
        error={errors.poster_path}
        touched={touched.poster_path}
        type="url"
      />

      <MultiSelectField
        value={values.genres}
        error={errors.genres}
        touched={touched.genres}
        setValue={setGenres}
        handleBlur={handleBlur}
      />

      <CustomInput
        name="overview"
        text="Overview"
        value={values.overview}
        onBlur={handleBlur}
        handleChange={handleChange}
        error={errors.overview}
        touched={touched.overview}
        type="text"
      />

      <CustomInput
        name="runtime"
        text="Runtime"
        value={values.runtime}
        onBlur={handleBlur}
        handleChange={handleChange}
        error={errors.runtime}
        touched={touched.runtime}
        type="number"
      />
    </>
  );
};
export default React.memo(FilmForm);
