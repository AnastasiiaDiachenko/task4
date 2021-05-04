import React from 'react';
import classNames from 'classnames';
import styled from 'styled-components';

const Label = styled.label`
  &.error {
    input {
      border: solid 3px red;
    }

    div[class$="-container"] {
      border: solid 3px red;
      border-radius: 15px;
    }
  }

  .error-message {
    color: red;
    font-size: 12px;
  }
`;

interface CustomInputProps {
  name: string,
  text: string,
  type: string,
  value: string,
  handleChange: () => void,
  onBlur: () => void,
  error: string,
  touched: string,
}

const CustomInput = ({
  name, value, handleChange, error, touched, onBlur, text, type
}: CustomInputProps) => {
  const inputClass = classNames({
    error: !!error && touched
  });

  return (
    <Label htmlFor={name} className={inputClass}>
      <span>{text}</span>
      <input
        name={name}
        type={type}
        placeholder={`Please enter your ${text}`}
        value={value}
        onBlur={onBlur}
        onChange={handleChange}
        min={1}
      />
      {
        !!error && touched && <span className="error-message">{error}</span>
      }
    </Label>
  );
};

export { Label };
// PATTERN: moized components
export default React.memo(CustomInput);
