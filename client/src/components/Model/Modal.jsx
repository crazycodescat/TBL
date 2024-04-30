import { createPortal } from "react-dom";

const Modal = () => {
  return createPortal(
    <>
      <div className="fixed top-0 left-0 w-full h-full backdrop" />
      <div className="flex flex-col z-10 w-[250px] top-0 left-0 h-screen border-[1px] border-solid border-black">
        <div>hello</div>
      </div>
    </>,
    document.getElementById("modal")
  );
};

export default Modal;
