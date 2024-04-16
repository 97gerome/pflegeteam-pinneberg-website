import React from 'react';
import ArrowRight from '../images/arrow-right.svg';

const CustomRightArrow = ({ onClick }) => (
  <button onClick={onClick} className="custom-right-arrow">
    <ArrowRight />
  </button>
);

export default CustomRightArrow;
