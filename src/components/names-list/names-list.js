import React from 'react'
import NamesListItems from '../names-list-items'



const NamesList = ({names}) => {

    const elements = names.map((item) => {
        const {id, ...itemProps} = item;
        return (
            <li key={id}>
                <NamesListItems {...itemProps}/>
            </li>
        )
    })

    return (
        <ul>
            {elements}
        </ul>
    )
}

export default NamesList;