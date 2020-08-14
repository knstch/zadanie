import React, {Component} from 'react';
import './names-list-items.css'

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
            <li className='app-list-item'>
                <span className='app-list-item-label'>{firstName}</span>
                <span className='app-list-item-label'>{lastName}</span>
                <div>
                    <button 
                    onClick={this.onDelete}
                    type='button'
                    className='app-list-item'
                    >Удалить</button>
                    <button 
                    onClick={this.onEdit}
                    type='button'
                    className='app-list-item'
                    >Редактировать</button>
                </div>
            </li>
        )
    }
};