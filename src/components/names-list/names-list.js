import React from 'react'
import NamesListItems from '../names-list-items'
import { ListGroup } from 'react-bootstrap' 

const NamesList = ({names}) => {

    const elements = names.map((item) => {
        const {id, ...itemProps} = item;
        return (
            <ListGroup.Item variant="dark" as="li" key={id}>
                <NamesListItems {...itemProps}/>
            </ListGroup.Item>
        )
    })

    return (
        <ListGroup horizontal as="ul">
            {elements}
        </ListGroup>
    )
}

export default NamesList;