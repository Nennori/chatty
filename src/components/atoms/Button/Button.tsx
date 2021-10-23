import React from 'react';

interface Props {
  disabled?: boolean;
  onClick: React.MouseEventHandler<HTMLElement>;
  children: React.ReactChild;
}

const Button: React.FC<Props> = ({ children, onClick, disabled = false }: Props) => {
  return (
    <button type="submit" className="button" onClick={onClick} disabled={disabled}>
      {children}
    </button>
  );
};

export default Button;
