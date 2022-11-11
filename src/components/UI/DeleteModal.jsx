import ReactDOM from "react-dom";
import Button from "./Button";
import Card from "./Card";
import React from "react";
import styles from "./DeleteModal.module.css";

const Backdrop = (props) => {
  return <div className={styles.backdrop} onClick={props.onConfirm}></div>;
};

const ModalOverlay = (props) => {
  return (
    <>
      <Card className={styles.modal}>
        <header className={styles.header}>
          <h2>Delete user:</h2>
        </header>
        <div className={styles.content}>
          <p>Are you sure?</p>
        </div>
        <footer className={styles.actions}>
          <Button onClick={() => props.onConfirm(props.id)}>Yes</Button>
          <Button onClick={props.onReject}>No</Button>
        </footer>
      </Card>
    </>
  );
};
const DeleteModal = (props) => {
  return (
    <>
      {ReactDOM.createPortal(
        <Backdrop onConfirm={props.onConfirm} />,
        document.getElementById("modal-root")
      )}
      {ReactDOM.createPortal(
        <ModalOverlay
          onConfirm={props.onConfirm}
          onReject={props.onReject}
          title={props.title}
          message={props.message}
        />,
        document.getElementById("backdrop-root")
      )}
    </>
  );
};
export default DeleteModal;
