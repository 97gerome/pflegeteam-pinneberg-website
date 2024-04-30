import clsx from 'clsx';
import React from 'react';

const TextInput = ({
  id,
  label,
  type,
  value,
  error,
  onChange = () => {},
  disabled,
}) => {
  return (
    <div id={id} className={clsx({ 'text-input': true, error: error })}>
      <label>
        {label}
        <input
          type={type ? type : 'text'}
          value={value}
          onChange={onChange}
          disabled={disabled}
        />
      </label>
      <p className="error-text extra-small">{error}</p>
    </div>
  );
};

export default TextInput;
