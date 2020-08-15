import React from 'react';
import axios from 'axios';


export default class DataList extends React.Component {
    state = {
        persons: []
    }

    componentDidMount () {
        axios.get(`http://localhost:3004/names`)
        .then(res => {
            console.log(res);
            this.setState({ persons: res.data });
        })
    }
    render() {
        return <ul>{this.state.persons.map(persons => <li key={persons.id}>{ persons.firstName }</li>)}
            </ul>
        
    }
}