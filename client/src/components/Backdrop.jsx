// components/Backdrop.js
import { createPortal } from "react-dom";

const Backdrop = ({ onClose }) => {
  const portalRoot = document.getElementById("portal-root");

  if (!portalRoot) {
    throw new Error('Element with id "portal-root" not found in the document');
  }

  return createPortal(
    <div className="fixed inset-0 bg-black opacity-70" onClick={onClose}></div>,
    portalRoot
  );
};

export default Backdrop;
