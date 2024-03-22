import React from 'react';

const TextInput = ({ id, label, onChange = () => {} }) => {
  return (
    <div id={id} className="text-input">
      <label>
        {label}
        <input type="text" onChange={onChange} />
      </label>
    </div>
  );
};

export default TextInput;
