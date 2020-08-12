import React from 'react'
import AppHeader from '../app-header'
import NamesList from '../names-list'
import './app.css'

const App = () => {
    return (
        <div className='app'>
            <AppHeader/>
            <NamesList/>
        </div>
    )
};

export default App;
