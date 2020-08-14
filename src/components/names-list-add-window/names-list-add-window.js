import React from 'react'
import { Toast, Button } from 'react-bootstrap';

const AddWindow = () => {
    return(
    <Toast>
            <Toast.Header>
                    <img src="holder.js/20x20?text=%20" className="rounded mr-2" alt=""/>
                    <strong className="mr-auto">Добавить пользователя</strong>
                </Toast.Header>
                <Toast.Body>
                    <Button className='mr-2'>
                        Добавить!
                    </Button>
                </Toast.Body>
            </Toast>
    )
};
export default AddWindow;