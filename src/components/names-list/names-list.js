import React from 'react'
import NamesListItems from '../names-list-items'
import { Table } from 'react-bootstrap';

const NamesList = ({names}) => {

    const elements = names.map((item) => {
        const {id, ...itemProps} = item;
        return (
            <NamesListItems {...itemProps} key={id}/>
        )
    })

    return (
        <Table striped bordered hover variant="dark">
            <thead>
                <tr>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Edit</th>
                </tr>
            </thead>
            <tbody>
                {elements}
            </tbody>
        </Table>
    )
}

export default NamesList;