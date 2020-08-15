import React from 'react'
import NamesListItems from '../names-list-items'
import { Table } from 'react-bootstrap';

const NamesList = () => {
    return (
        <Table striped bordered hover variant="dark">
            <thead>
                <tr>
                    <th>Имя</th>
                    <th>Фамилия</th>
                </tr>
            </thead>
            <tbody>
                <NamesListItems/>
            </tbody>
        </Table>
    )
}

export default NamesList;