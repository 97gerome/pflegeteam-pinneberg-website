import clsx from 'clsx';
import React from 'react';

const Button = ({ label, className, onClick = () => {}, disabled }) => {
  return (
    <button
      className={clsx('button', className)}
      onClick={onClick}
      type="button"
      disabled={disabled}
    >
      {label}
    </button>
  );
};

export default Button;
