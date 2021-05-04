import React from 'react';
import { useDispatch } from 'react-redux';
import { useFormik } from 'formik';
import { ThemeProvider } from 'styled-components';
import FilmForm from '../FilmForm';
import { FilmFormProps, initialFilm } from '../FilmForm/types';
import { createFilm, editFilm } from '../../modules/Main/actions';
import { FormWrapper } from '../FilmForm/style';
import { Button, ButtonTheme } from '../Button';
import CourseSchema from '../../helpers/validation';
import { EditFilmProps } from '../../types/film';

const MainForm = ({ film, edit, closeForm }: FilmFormProps) => {
  const dispatch = useDispatch();
  const initialFilmValue = edit ? film : initialFilm;

  const submitForm = (values: EditFilmProps) => {
    if (edit) {
      dispatch(editFilm(values));
    } else {
      dispatch(createFilm(values));
    }
    closeForm();
  };

  const formik = useFormik({
    initialValues: initialFilmValue,
    validationSchema: CourseSchema,
    onSubmit: submitForm
  });

  return (
    <FormWrapper>
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
      <form onSubmit={formik.handleSubmit} data-testid="form">
        <FilmForm
          values={formik.values}
          isSubmitting={formik.isSubmitting}
          handleChange={formik.handleChange}
          handleBlur={formik.handleBlur}
          errors={formik.errors}
          touched={formik.touched}
          setFieldValue={formik.setFieldValue}
          setTouched={formik.setTouched}
        />

        <div className="buttons">
          <ThemeProvider theme={ButtonTheme}>
            <Button
              className="reset"
              onClick={formik.handleReset}
            >
              Reset
            </Button>
          </ThemeProvider>
          <Button
            type="submit"
            data-testid="submit"
            disabled={formik.isSubmitting}
          >
            {edit ? <p>Save</p> : <p>Submit</p>}
          </Button>
        </div>
      </form>
    </FormWrapper>
  );
};

export default React.memo(MainForm);
