import React, { Component } from 'react'
import { Button, Form } from 'react-bootstrap';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'
const axios = require('axios')
toast.configure()

export default class AddWindow extends Component {
  state = {
      firstName: '',
      lastName: ''
  }

  constructor () {
    super();
    this.Time = this.Time.bind(this);
  }

  Time = () => {window.location.reload(false);};

  handleChangeName = e => {
      this.setState({ firstName: e.target.value });
  }

  handleChangeSurname = e => {
    this.setState({ lastName: e.target.value });
  }

  handleSubmit = e => {
    e.preventDefault();
    if (this.state.firstName.length > 15 || this.state.lastName.length > 15) {
      alert ('Введите нормальное имя или фамилию');
      e.preventDefault();
    } else if (this.state.firstName === '' || this.state.lastName === '') {
      alert ('Введите нормальное имя или фамилию');
      e.preventDefault();
    } else {
        axios.post('http://localhost:3004/names', { firstName: this.state.firstName, lastName: this.state.lastName })
        .then(function (response) {
          if (response.status === 201) {
              toast(`Добавление успешно! Статус: ${response.status}`);
          } else {
              toast(`Упс! Что-то пошло не так :( Статус ответа: ${response.status}`);
                }
            }
          )
        .then(setTimeout(this.Time, 1700));
    }          
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
