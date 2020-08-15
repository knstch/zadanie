import React, {Component } from 'react';
import { Button, ButtonGroup } from 'react-bootstrap';
import EditWindow from '../edit-window';
import axios from 'axios';

export default class NamesListItems extends Component {
    state = {
        persons: []
    }
    constructor (props) {
        super(props);
    this.onDelete = this.onDelete.bind(this);
    };
    componentDidMount () {
        axios.get(`http://localhost:3004/names`)
        .then(res => {
            this.setState({ persons: res.data });
        })
    }
    onDelete() {
        console.log('del');
    }

    render() {
        return (
            this.state.persons.map(persons =><tr id = { persons.id } key = { persons.id }>
                <td>{ persons.firstName }</td>
                <td>{ persons.lastName }</td>
                <td>
                    <ButtonGroup className='mr-2'>
                        <Button onClick={this.onDelete}>Удалить</Button>
                        <EditWindow fstName = {persons.firstName} lstName = {persons.lastName}/>
                    </ButtonGroup>
                </td>
                </tr>)
        )
    }
};