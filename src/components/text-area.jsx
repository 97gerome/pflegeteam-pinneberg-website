import clsx from 'clsx';
import React from 'react';

const TextArea = ({
  id,
  label,
  value,
  error,
  onChange = () => {},
  disabled,
  rows,
  columns,
}) => {
  return (
    <div id={id} className={clsx({ 'text-area': true, error: error })}>
      <label>
        {label}
        <textarea
          type="text"
          value={value}
          onChange={onChange}
          rows={rows}
          columns={columns}
          disabled={disabled}
        />
      </label>
      <p className="error-text extra-small">{error}</p>
    </div>
  );
};

export default TextArea;
