import * as Yup from 'yup';

const CourseSchema = Yup.object().shape({
  title: Yup
    .string()
    .required('title required'),
  release_date: Yup
    .date()
    .required('release_date required'),
  genres: Yup
    .array()
    .min(1, 'genre should be at least one')
    .required('genre is required'),
  overview: Yup
    .string()
    .required('overview required'),
  poster_path: Yup
    .string()
    .url('Image should have valid url')
    .required('Image is required'),
  runtime: Yup
    .number()
    .min(30, 'Every movie should be at least 30 min long')
    .required('runtime required')
});

export default CourseSchema;
