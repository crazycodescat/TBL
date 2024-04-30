/* eslint-disable react/prop-types */
// components/Modal.js
import { useState } from "react";
import Backdrop from "./Backdrop";

const Modal = ({ children }) => {
  const [isModalOpen, setModalOpen] = useState(false);

  const handleOpenModal = () => {
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
  };

  return (
    <div>
      <button onClick={handleOpenModal}>Open Modal</button>

      {isModalOpen && (
        <>
          <div className="fixed inset-0 flex items-center justify-center">
            {/* Your modal content goes here */}
            {children}
            <Backdrop onClose={handleCloseModal} />
          </div>
        </>
      )}
    </div>
  );
};

export default Modal;
