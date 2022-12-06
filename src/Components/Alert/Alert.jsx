import React from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { useDispatch } from "react-redux";
import {deleteUser} from '../../redux/action/user'


function Alert({isOpen, handleClose, id}) {
  const dispatch = useDispatch();
  return (
    <Modal show={isOpen} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Are you sure you want to delete?</Modal.Title>
      </Modal.Header>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
        <Button variant="danger" onClick={() => dispatch(deleteUser(id))}>
          Delete
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default Alert;
