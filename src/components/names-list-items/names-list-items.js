import React, {Component} from 'react';
import { ListGroup } from 'react-bootstrap';
import { ButtonGroup } from 'react-bootstrap';
import { ButtonToolbar } from 'react-bootstrap'; 
import { Button } from 'react-bootstrap'; 

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
        console.log('edit')
    }

    render() {
        const {firstName} = this.props,
              {lastName} = this.props;

        return (
            <ListGroup.Item as="li" active>
                <span className='app-list-item-label'>{firstName}</span>
                <span className='app-list-item-label'>{lastName}</span>
                <ButtonToolbar>
                    <ButtonGroup className="mr-2">
                        <Button onClick={this.onDelete}>Удалить</Button>
                        <Button onClick={this.onEdit}>Редактировать</Button>
                    </ButtonGroup>
                </ButtonToolbar>
            </ListGroup.Item>
        )
    }
};