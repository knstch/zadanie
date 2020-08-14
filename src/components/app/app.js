import React from 'react'
import NamesList from '../names-list'
import './app.css';



const App = () => {

    const data = [
        {firstName: 'Konstantin ', lastName: 'Cherepanov', id: 1},
        {firstName: 'Ivan ', lastName: 'Ivanov', id: 2},
        {firstName: 'Test ', lastName: 'Test', id: 3}
    ];

    return (
        <div className='app'>
            <NamesList names={data}/>
        </div>
    )
};

export default App;
