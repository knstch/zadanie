import React, {useState} from 'react'
import { Button, Modal } from 'react-bootstrap';
import EditModal from '../edit-modal';


const EditWindow = ({id, firstName, lastName}) => {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
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
            <EditModal id = {id} firstName = {firstName} lastName = {lastName}/>
          </Modal.Body>
        </Modal>
      </>
    );   
};
export default EditWindow;