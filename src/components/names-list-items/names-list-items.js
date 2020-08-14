import React, {Component} from 'react';

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
            <li className='round'>
                <span>{firstName}</span>
                <span>{lastName}</span>
                <div>
                    <button onClick={this.onDelete}>Удалить</button>
                    <button onClick={this.onEdit}>Редактировать</button>
                </div>
            </li>
        )
    }
};