import React from "react";
import ReactDOM from "react-dom";
import classes from "./Modal.module.css";

const Backdrop = (props) => {
  return <div className={classes.backdrop} onClick={props.onShowModal}></div>;
};

const ModalOverlay = (props) => {
  return (
    <div className={classes.modal}>
      <img src={props.image} alt="zoomed sneaker image" />
    </div>
  );
};

const portalElement = document.getElementById("overlays");

const Modal = (props) => {
  return (
    <>
      {ReactDOM.createPortal(
        <Backdrop onShowModal={props.onClick} />,
        portalElement
      )}
      {ReactDOM.createPortal(
        <ModalOverlay image={props.image} />,
        portalElement
      )}
    </>
  );
};

export default Modal;
