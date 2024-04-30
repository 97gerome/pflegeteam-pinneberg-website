import React from 'react';

const Checkbox = ({ id, text, checked, onChange, disabled }) => {
  return (
    <div id={id} className="checkbox">
      <input
        type="checkbox"
        checked={checked}
        onChange={onChange}
        disabled={disabled}
      />
      <p>{text}</p>
    </div>
  );
};

export default Checkbox;
