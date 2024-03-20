import React, { useEffect, useRef, useState } from 'react';
import Close from '../images/close.svg';

const Modal = ({ id, isOpen, onClose, children }) => {
  const [isModalOpen, setModalOpen] = useState(false);
  const modalRef = useRef(null);

  const handleClose = () => {
    if (onClose) {
      onClose();
    }
    setModalOpen(false);
  };

  useEffect(() => {
    setModalOpen(isOpen);
  }, [isOpen]);

  useEffect(() => {
    const modalElement = modalRef.current;
    if (modalElement) {
      if (isModalOpen) {
        modalElement.showModal();
      } else {
        modalElement.close();
      }
    }
  }, [isModalOpen]);

  return (
    <dialog ref={modalRef} id={id} className="modal">
      {children}
      <Close id="close_button" onClick={handleClose} />
    </dialog>
  );
};

export default Modal;
