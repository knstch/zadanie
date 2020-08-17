import React, { Component } from 'react'
import { Button, Form } from 'react-bootstrap';
const axios = require('axios')

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
