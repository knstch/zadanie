import React, {Component} from 'react'
import { Button, Form } from 'react-bootstrap';
const axios = require('axios');

export default class EditModal extends Component {
  state = {
      firstName: '',
      lastName: ''
  }
  constructor (id) {
      super();
      this.id = id;
  }
  
  handleChangeName = e => {
    this.setState({ firstName: e.target.value });
  }

  handleChangeSurname = e => {
    this.setState({ lastName: e.target.value });
  }

  handleSubmit = e => {
    axios.post(`http://localhost:3004/names/${this.id}/`, { firstName: this.state.firstName, lastName: this.state.lastName })
    .then(res => { console.log(res);
                   console.log(res.data);
    })
    window.location.reload(false);             
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
            <Button variant="primary" type="submit" onClick={()=>this.handleSubmit}>Изменить</Button>
        </Form>  
        )
  }
};