import React from 'react'
import NamesListItems from '../names-list-items'
import './names-list.css';


const NamesList = ({names}) => {

    const elements = names.map((item) => {
        const {id, ...itemProps} = item;
        return (
            <li key={id} className='list-group-item'>
                <NamesListItems {...itemProps}/>
            </li>
        )
    })

    return (
        <ul className='app-list'>
            {elements}
        </ul>
    )
}

export default NamesList;