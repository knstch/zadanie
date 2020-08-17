import React, {Component} from 'react'
import { Button, Form } from 'react-bootstrap';
const axios = require('axios');

export default class EditModal extends Component {
  state = {
      firstName: '',
      lastName: ''
  }
  constructor ({id, firstName, lastName}) {
      super();
      this.id = id;
      this.firstName = firstName;
      this.lastName = lastName;
  }
  
  handleChangeName = e => {
      if ({firstName: e.target.value}.length > 15) {
          alert('Введите нормальное имя')
        } else {
          this.setState({ firstName: e.target.value });
      }
  }

  handleChangeSurname = e => {
    this.setState({ lastName: e.target.value });
  }

  handleSubmit = e => {
    if (this.state.firstName.length > 15 || this.state.lastName.length > 15) {
        alert ('Введите нормальное имя или фамилию');
        e.preventDefault();
      } else if (this.state.firstName === '' || this.state.lastName === '') {
        alert ('Введите нормальное имя или фамилию');
        e.preventDefault();
      } else {
        axios.patch(`http://localhost:3004/names/${this.id}`, { firstName: this.state.firstName, lastName: this.state.lastName })
        .then(res => { console.log(res);
                    console.log(res.data);
        })
        window.location.reload(false);  
    }       
  }
  
  render() {
      return (
        <Form onSubmit={this.handleSubmit}>
          <Form.Group controlId="formBasicFirstName">
            <Form.Label>Имя:
              <Form.Control type="text" placeholder = {this.firstName} onChange={ this.handleChangeName }/>
            </Form.Label>
          </Form.Group>
          <Form.Group controlId="formBasicLastName">
            <Form.Label>Фамилия:
              <Form.Control type="text" placeholder = {this.lastName} onChange={ this.handleChangeSurname }/>
            </Form.Label>
          </Form.Group>
            <Button variant="primary" type="submit" onClick={()=>this.handleSubmit}>Изменить</Button>
        </Form>  
        )
  }
};