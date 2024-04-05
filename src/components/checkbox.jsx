import React from 'react';

const Checkbox = ({ id, text }) => {
  return (
    <div id={id} className="checkbox">
      <input type="checkbox" />
      <p>{text}</p>
    </div>
  );
};

export default Checkbox;
