import React from 'react';
import classNames from 'classnames';
import Select from 'react-select';
import { customStyles } from '../FilmForm/style';
import { Label } from '../CustomInput';
import { optionsEnum } from '../../constants';

const options = [
  { value: optionsEnum.Fantasy, label: optionsEnum.Fantasy },
  { value: optionsEnum.Adventure, label: optionsEnum.Adventure },
  { value: optionsEnum.Science, label: optionsEnum.Science },
  { value: optionsEnum.Drama, label: optionsEnum.Drama },
  { value: optionsEnum.Romance, label: optionsEnum.Romance },
  { value: optionsEnum.Action, label: optionsEnum.Action },
  { value: optionsEnum.Comedy, label: optionsEnum.Comedy },
  { value: optionsEnum.Family, label: optionsEnum.Family },
  { value: optionsEnum.Animation, label: optionsEnum.Animation }
];

const MultiSelectField = ({
  value, error, touched, setValue, handleBlur
} : any) => (
  <Label htmlFor="genre" className={classNames({ error: touched && !!error })}>
    <span>Genre</span>
    <Select
      name="genres"
      placeholder="Genre here"
      styles={customStyles}
      value={value.map((genre: string[]) => ({ value: genre, label: genre }))}
      isMulti
      onChange={setValue}
      onBlur={handleBlur}
      options={options}
    />
    {
        !!error && touched && <span className="error-message">{error}</span>
      }
  </Label>
);

export default MultiSelectField;
