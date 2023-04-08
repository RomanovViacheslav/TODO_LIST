import React from 'react';
import { Link } from 'react-router-dom';
import { OptionButtonProps } from './OptionButton.types';

export function OptionButton({ className, iconClass, disabled, to, onClick }: OptionButtonProps) {
  if (to) {
    return (
      <Link className={className} to={to}>
        <i className={iconClass} />
      </Link>
    );
  }

  return (
    <button type="button" className={className} disabled={disabled} onClick={onClick}>
      <i className={iconClass} />
    </button>
  );
}
