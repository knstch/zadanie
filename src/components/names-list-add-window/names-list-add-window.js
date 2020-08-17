import React, {useState, Component} from 'react'
import { Button, Modal, Form, ButtonGroup } from 'react-bootstrap';
const axios = require('axios')

// const AddWindow = () => {
//     const [show, setShow] = useState(false);

//     const handleClose = () => setShow(false);
//     const handleShow = () => setShow(true);

//     return (
//       <>
//         <Button variant="primary" onClick={handleShow}>
//           Добавить пользователя
//         </Button>
  
//         <Modal show={show} onHide={handleClose}>
//           <Modal.Header closeButton>
//             <Modal.Title>Новый сотрудник</Modal.Title>
//           </Modal.Header>
//           <Modal.Body>
//             <Form>
//                 <Form.Group controlId="formBasicFirstName">
//                     <Form.Label>Имя</Form.Label>
//                     <Form.Control type="firstName"/>
//                 </Form.Group>
//                 <Form.Group controlId="formBasicLastName">
//                     <Form.Label>Фамилия</Form.Label>
//                     <Form.Control type="lastName" />
//                 </Form.Group>
//                 <Modal.Footer>
//                   <Button variant="secondary" onClick={handleClose}>
//                     Закрыть
//                   </Button>
//                   <Button variant="primary" onClick={handleClose}>
//                     Добавить
//                   </Button>
//                 </Modal.Footer>
//             </Form>
//           </Modal.Body>
//             </Modal>
//       </>
//     );
// };

// export default AddWindow;

export default class AddWindow extends Component {
  state = {
      firstName: '',
      lastName: ''
  }
  
  handleChangeName = e => {
    this.setState({ firstName: e.target.value });
  }

  handleChangeSurname = e => {
    this.setState({ lastName: e.target.value });
  }

  handleSubmit = e => {

    axios.post('http://localhost:3004/names', { firstName: this.state.firstName, lastName: this.state.lastName })
    .then(res => { console.log(res);
                   console.log(res.data);
    })             
  }
  
  render() {
      return (
        <Form onSubmit={this.handleSubmit}>
          <Form.Group controlId="formBasicFirstName">
            <Form.Label>Имя:
              <Form.Control type="text" onChange={ this.handleChangeName }/>
            </Form.Label>
          </Form.Group>
          <Form.Group controlId="formBasicLastName">
            <Form.Label>Фамилия:
              <Form.Control type="text" onChange={ this.handleChangeSurname }/>
            </Form.Label>
          </Form.Group>
            <Button variant="primary" type="submit">Добавить</Button>
        </Form>  
        )
  }
};
