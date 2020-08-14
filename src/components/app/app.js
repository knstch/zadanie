import React from 'react';
import NamesList from '../names-list';
import AddWindow from '../names-list-add-window';
import './app.css';


const App = () => {

    const data = [
        {firstName: 'Konstantin ', lastName: 'Cherepanov', id: 1},
        {firstName: 'Ivan ', lastName: 'Ivanov', id: 2},
        {firstName: 'Test ', lastName: 'Test', id: 3},
        {firstName: 'Test ', lastName: 'Test', id: 4},
        {firstName: 'Test ', lastName: 'Test', id: 5},
        {firstName: 'Test ', lastName: 'Test', id: 6},
        {firstName: 'Test ', lastName: 'Test', id: 7},
        {firstName: 'Test ', lastName: 'Test', id: 8},
        {firstName: 'Test ', lastName: 'Test', id: 9},
        {firstName: 'Test ', lastName: 'Test', id: 10},
        {firstName: 'Test ', lastName: 'Test', id: 11},
        {firstName: 'Test ', lastName: 'Test', id: 12},
        {firstName: 'Test ', lastName: 'Test', id: 13},
        {firstName: 'Test ', lastName: 'Test', id: 14}
    ];

    return (
        <div className='app'>
            <NamesList names={data}/>
            <AddWindow/>
        </div>
    )
};

export default App;
