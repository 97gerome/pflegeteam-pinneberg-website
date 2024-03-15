import React from 'react';

const Hero = ({ image, content }) => {
  return (
    <div id="hero">
      {image}
      <div className="row">
        <div className="content">
          {content}
        </div>
      </div>
    </div>
  )
}

export default Hero;