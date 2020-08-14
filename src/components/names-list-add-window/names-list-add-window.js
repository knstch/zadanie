import React, {useState} from 'react'
import { Button, Modal, Form } from 'react-bootstrap';


const AddWindow = () => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  
    return (
      <>
        <Button variant="primary" onClick={handleShow}>
          Добавить пользователя
        </Button>
  
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Новый сотрудник</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form>
                <Form.Group controlId="formBasicFirstName">
                    <Form.Label>Имя</Form.Label>
                    <Form.Control type="firstName"/>
                </Form.Group>
                <Form.Group controlId="formBasicLastName">
                    <Form.Label>Фамилия</Form.Label>
                    <Form.Control type="lastName" />
                </Form.Group>
            </Form>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Закрыть
            </Button>
            <Button variant="primary" onClick={handleClose}>
              Добавить
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    );
};
export default AddWindow;