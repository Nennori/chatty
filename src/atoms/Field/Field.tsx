import React, { useState } from 'react';
import errorIcon from '../../img/error_icon.svg';

interface Props {
  label: string;
  placeholder: string;
  type: string;
  id: string;
  errorMessage: string;
  isError: boolean;
}

function Field({ label, type, placeholder, id, errorMessage, isError }: Props) {
  let inputClass;
  const [isFocused, setFocused] = useState(false);
  const toggleFocused = () => {
    setFocused(!isFocused);
  };
  if (isError) {
    inputClass = 'field__input field__input--error';
  } else if (isFocused) {
    inputClass = 'field__input field__input--typing';
  } else {
    inputClass = 'field__input field__input';
  }
  return (
    <div className="field">
      <label className="field__label" htmlFor={id}>
        {label}
      </label>
      <input
        type={type}
        className={inputClass}
        id={id}
        placeholder={placeholder}
        onFocus={toggleFocused}
        onBlur={toggleFocused}
      />
      {isError && <img className="field__error-icon" src={errorIcon} alt="error" />}
      {isError && <p className="field__error-message">{errorMessage}</p>}
    </div>
  );
}

export default Field;
