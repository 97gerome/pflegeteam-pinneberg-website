import React from 'react';

const TextInput = ({ id, label, type, onChange = () => {} }) => {
  return (
    <div id={id} className="text-input">
      <label>
        {label}
        <input type={type ? type : 'text'} onChange={onChange} />
      </label>
    </div>
  );
};

export default TextInput;
