import React from 'react';
import NamesList from '../names-list';
import AddWindow from '../names-list-add-window';

import './app.css';

const App = () => {
    return (
        <div className='app'>
            <NamesList/>
            <AddWindow/>
        </div>
    )
};

export default App;
