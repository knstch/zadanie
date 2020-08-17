import React from 'react';
import NamesList from '../names-list';
import AddWindow from '../names-list-add-window';
import AddModal from '../names-list-add-modal'
import './app.css';

const App = () => {
    return (
        <div className='app'>
            <NamesList/>
            <AddModal/>
        </div>
    )
};

export default App;
