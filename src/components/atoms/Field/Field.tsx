import React from 'react';
import errorIcon from '../../../assets/images/error_icon.svg';

interface Props {
  label: string;
  placeholder: string;
  type: string;
  id: string;
  errorMessage?: string;
  invalid?: boolean;
}

const Field: React.FC<Props> = ({
  label,
  type,
  placeholder,
  id,
  errorMessage,
  invalid = false,
}: Props) => {
  const inputClass = invalid ? 'field__input--error' : '';
  return (
    <div className="field">
      <label className="field__label" htmlFor={id}>
        {label}
      </label>
      <input
        type={type}
        className={`field__input ${inputClass}`}
        id={id}
        placeholder={placeholder}
      />
      {invalid && <img className="field__error-icon" src={errorIcon} alt="error" /> && (
        <p className="field__error-message">{errorMessage}</p>
      )}
    </div>
  );
};

export default Field;
