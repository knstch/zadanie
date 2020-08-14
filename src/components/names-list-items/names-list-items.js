import React, {Component} from 'react';
import { Button, ButtonGroup  } from 'react-bootstrap';

export default class NamesListItems extends Component {
    constructor (props) {
        super(props);
    this.onDelete = this.onDelete.bind(this);
    this.onEdit = this.onEdit.bind(this);
    };

    onDelete() {
        console.log('del');
    }

    onEdit() {
        console.log('edit');
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
                        <Button onClick={this.onEdit}>Редактировать</Button>
                    </ButtonGroup>
                </td>    
            </tr>
        )
    }
};