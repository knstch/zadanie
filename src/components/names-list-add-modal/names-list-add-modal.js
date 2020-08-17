import React, { useState } from 'react';
import { Button, Modal } from 'react-bootstrap';
import AddWindow from '../names-list-add-window';

const AddModal = () => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
      <>
        <Button variant="primary" onClick={handleShow}>
          Добавить сотрудника
        </Button>
  
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Новый сотрудник</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <AddWindow/>
          </Modal.Body>
        </Modal>
      </>
    );
};

export default AddModal;