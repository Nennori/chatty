import React, { useState } from 'react';

interface Props {
  text: string;
  disabled: boolean;
  onClick: React.MouseEventHandler<HTMLElement>;
}

function Button({ text, disabled, onClick }: Props) {
  const [hover, setHover] = useState(false);
  const toggleHover = () => {
    setHover(!hover);
  };
  const [pressed, setPressed] = useState(false);
  const togglePressed = () => {
    setPressed(!pressed);
  };
  let btnStyle: string;
  if (disabled) {
    btnStyle = 'button button--inactive';
  } else if (pressed) {
    btnStyle = 'button button--press';
  } else if (hover) {
    btnStyle = 'button button--hover';
  } else {
    btnStyle = 'button';
  }
  return (
    <button
      type="submit"
      className={btnStyle}
      onClick={!disabled ? onClick : undefined}
      onMouseEnter={!disabled ? toggleHover : undefined}
      onMouseLeave={!disabled ? toggleHover : undefined}
      onMouseDown={!disabled ? togglePressed : undefined}
      onMouseUp={!disabled ? togglePressed : undefined}
    >
      {text}
    </button>
  );
}

export default Button;
