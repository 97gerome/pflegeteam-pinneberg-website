import React from 'react';
import HochladenIcon from '../images/hochladen-icon.svg';

const FileInput = ({ id, label }) => {
  return (
    <div id={id} className="file-input">
      <label>
        {label}
        <div className="input-wrapper">
          <HochladenIcon />
          <p>Datei Hochladen</p>
          <input type="file" />
        </div>
      </label>
    </div>
  );
};

export default FileInput;
