import React from 'react';
import { Link } from 'react-router-dom';
import { ButtonProps } from './Button.types';

export function Button({ onClick, type = 'button', text, to }: ButtonProps) {
  const style = 'btn btn-primary d-block ml-auto';
  if (to) {
    return (
      <Link to={to} className={style}>
        {text}
      </Link>
    );
  } else {
    return (
      <button onClick={onClick} type={type} className={style}>
        {text}
      </button>
    );
  }
}
