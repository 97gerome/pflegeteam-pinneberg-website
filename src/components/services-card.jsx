import React from 'react';

const ServicesCard = ({ image, content }) => {
  return (
    <div className="services-card">
      {image}
      <div className="row">
        <div className="content">{content}</div>
      </div>
    </div>
  );
};

export default ServicesCard;
