import React from 'react';
import Modal from './modal';
import Button from '../components/button';
import { navigate } from 'gatsby';

const ServiceModal = ({ isOpen, onClose, image, heading, content }) => {
  const toKontakt = () => {
    navigate('/kontakt');
  };

  return (
    <Modal id="service_modal" isOpen={isOpen} onClose={onClose}>
      <div className="row">
        <div className="col col-1">{image}</div>
        <div className="col col-2">
          <h5>{heading}</h5>
          <div className="content">{content}</div>
          <div className="buttons-wrapper">
            <Button
              label="Leistungen anfordern"
              className="transparent-button bordered"
              onClick={toKontakt}
            />
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default ServiceModal;
