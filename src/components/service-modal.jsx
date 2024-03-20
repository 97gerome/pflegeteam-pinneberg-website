import React from 'react';
import Modal from './modal';
import Button from '../components/button';

const ServiceModal = ({ isOpen, onClose, image, heading, content }) => {
  return (
    <Modal id="service_modal" isOpen={isOpen} onClose={onClose}>
      <div className="row">
        <div className="col col-1">{image}</div>
        <div className="col col-2">
          <h4>{heading}</h4>
          <div className="content">{content}</div>
          <div className="buttons-wrapper">
            <Button label="Leistungen anfordern" className="bordered" />
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default ServiceModal;
