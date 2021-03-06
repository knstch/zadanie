import React, {Component } from 'react';
import { Button, ButtonGroup } from 'react-bootstrap';
import EditWindow from '../edit-window';
import axios from 'axios';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'

toast.configure()

export default class NamesListItems extends Component {
    state = {
        persons: []
    }
    constructor (props) {
        super(props);
    this.onDelete = this.onDelete.bind(this);
    this.Time = this.Time.bind(this);
    };
    async componentDidMount () {
        await axios.get(`http://localhost:3004/names`)
        .then(res => {
            this.setState({ persons: res.data });
        })
    }

    Time = () => {window.location.reload(false);};

    onDelete = e => {
        axios.delete(`http://localhost:3004/names/${e}`)
        .then(function (response) {
            if (response.status === 200) {
                toast(`Удаление успешно! Статус: ${response.status}`);
            } else {
                toast(`Упс! Что-то пошло не так :( Статус ответа: ${response.status}`);
                }
            }
        )
        .then(setTimeout(this.Time, 2000));
    }


    render() {
        return (
            this.state.persons.map(persons =><tr id = { persons.id } key = { persons.id }>
                <td>{ persons.firstName }</td>
                <td>{ persons.lastName }</td>
                <td>
                    <ButtonGroup className='mr-2'>
                        <Button onClick={ () => this.onDelete(persons.id) }>Удалить</Button>
                        <EditWindow id = {persons.id} firstName = {persons.firstName} lastName = {persons.lastName}/>
                    </ButtonGroup>
                </td>
                </tr>)
        )
    }
};