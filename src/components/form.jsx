import React from 'react';

const Form = ({ id, children }) => {
  return (
    <form id={id} className="form">
      {children}
    </form>
  );
};

export default Form;
