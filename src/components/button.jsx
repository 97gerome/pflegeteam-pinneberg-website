import clsx from 'clsx';
import React from 'react';

const Button = ({ label, className, onClick = () => {} }) => {
  return (
    <button
      className={clsx('button', className)}
      onClick={onClick}
      type="button"
    >
      {label}
    </button>
  );
};

export default Button;
