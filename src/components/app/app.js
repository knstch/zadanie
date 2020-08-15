import React from 'react';
import NamesList from '../names-list';
import AddWindow from '../names-list-add-window';
import DataList from '../getting-data';

import './app.css';

const App = () => {
    const data = [
            {firstName: "Konstantin ", lastName: "Cherepanov", id: 1},
        ];
    return (
        <div className='app'>
            <NamesList names={data}/>
            <AddWindow/>
            <DataList/>
        </div>
    )
};

export default App;
