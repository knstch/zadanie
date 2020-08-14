import React from 'react';
import './app-header.css';
import { Card } from 'react-bootstrap';

const AppHeader = () => {
    return (
    <Card className='app-header'>
        <p1>Имя </p1>
        <p2>Фамилия</p2>
    </Card>
    )
};

export default AppHeader;