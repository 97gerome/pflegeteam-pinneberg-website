import React from 'react';
import ArrowLeft from '../images/arrow-left.svg';

const CustomLeftArrow = ({ onClick }) => (
  <button onClick={onClick} className="custom-left-arrow">
    <ArrowLeft />
  </button>
);

export default CustomLeftArrow;
