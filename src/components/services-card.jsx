import React from 'react';
import Button from './button';

const ServicesCard = ({ image, heading, summary, onMoreClick }) => {
  return (
    <div className="services-card">
      {image}
      <div className="row">
        <div className="content">
          <div className="heading-wrapper">
            <h5>{heading}</h5>
          </div>
          <div className="summary-wrapper">
            <p>{summary}</p>
          </div>
          <div className="buttons-wrapper">
            <Button
              className="white-button small-button"
              label="Mehr dazu"
              onClick={onMoreClick}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesCard;
