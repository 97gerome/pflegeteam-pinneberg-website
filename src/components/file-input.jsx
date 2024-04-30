import React from 'react';
import HochladenIcon from '../images/hochladen-icon.svg';
import clsx from 'clsx';

const FileInput = ({ id, label, onChange, error, accept, disabled }) => {
  return (
    <div id={id} className={clsx({ 'file-input': true, error: error })}>
      <label>
        {label}
        <div className={clsx({ 'input-wrapper': true, disabled: disabled })}>
          <HochladenIcon />
          <p>Datei Hochladen</p>
          <input
            type="file"
            onChange={onChange}
            accept={accept}
            disabled={disabled}
          />
        </div>
      </label>
      <p className="error-text extra-small">{error}</p>
    </div>
  );
};

export default FileInput;
