import React from 'react';

const TextArea = ({ id, label, onChange = () => {}, rows, columns }) => {
  return (
    <div id={id} className="text-area">
      <label>
        {label}
        <textarea
          type="text"
          onChange={onChange}
          rows={rows}
          columns={columns}
        />
      </label>
    </div>
  );
};

export default TextArea;
