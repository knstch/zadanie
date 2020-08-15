import React, {useState} from 'react'
import { Button, Modal, Form } from 'react-bootstrap';

const EditWindow = ({fstName, lstName}) => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    console.log(fstName);
    return (
      <>
        <Button variant="primary" onClick={handleShow}>
          Редактировать
        </Button>
  
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Редактировать данные</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form>
                <Form.Group controlId="formBasicFirstName">
                    <Form.Label>Имя</Form.Label>
                    <Form.Control type="fstName" placeholder={fstName}/>
                </Form.Group>
                <Form.Group controlId="formBasicLastName">
                    <Form.Label>Фамилия</Form.Label>
                    <Form.Control type="lastName" placeholder={lstName} />
                </Form.Group>
            </Form>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Закрыть
            </Button>
            <Button variant="primary" onClick={handleClose}>
              Изменить
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    );   
};
export default EditWindow;