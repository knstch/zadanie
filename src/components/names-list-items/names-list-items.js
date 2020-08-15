import React, {Component } from 'react';
import { Button, ButtonGroup } from 'react-bootstrap';
import EditWindow from '../edit-window';


export default class NamesListItems extends Component {
    constructor (props) {
        super(props);
    this.onDelete = this.onDelete.bind(this);
    };
    onDelete() {
        console.log('del');
    }

    render() {
        const {firstName} = this.props,
              {lastName} = this.props;

        return (
            <tr>
                <td>
                    {firstName}
                </td>
                <td>
                    {lastName}
                </td>
                <td>
                    <ButtonGroup className='mr-2'>
                        <Button onClick={this.onDelete}>Удалить</Button>
                        <EditWindow fstName = {firstName} lstName = {lastName}/>
                    </ButtonGroup>
                </td>    
            </tr>
        )
    }
};