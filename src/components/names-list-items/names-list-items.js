import React from 'react';

const axios = require('axios');

class DynamicList {
    
    constructor(FirstName, LastName) {
        this.FirstName = FirstName;
        this.LastName = LastName;
    }
    render() {
        return (
        <li>
            <span>{this.FirstName}</span>
            <span>{this.LastName}</span>
            <div>
                <button>Удалить</button>
                <button>Редактировать</button>
            </div>
        </li>
        )
    }
}


NamesListItems = () => {
    axios.get('http://localhost:3000/names')
    .then(data => {
        data.data.forEach(({FirstName, LastName}) => {
            new DynamicList (FirstName, LastName).render();
        });
    })
}
// const NamesListItems = () => {
//     return (
        // <li className='round'>
        //     <span>Сергей</span>
        //     <span>Иванов</span>
        //     <div>
        //         <button>Удалить</button>
        //         <button>Редактировать</button>
        //     </div>
        // </li>
//     )
// }

export default NamesListItems;