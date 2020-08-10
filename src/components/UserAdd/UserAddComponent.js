import React from 'react';
import useForm from '../../hooks/useForm.js';
import UserAdd from './UserAdd.js';

const UserAddComponent = () => {

    const initialValues = {
        name: '',
        lastName: '',
        phone: '',
        streetNumber: 0,
        streetName: '',
        city: '',
        email: ''
    };

    const onSubmit = () => {
        // TODO
    }

    const { values, handleChange, handleSubmit } = useForm({initialValues}, onSubmit);

    return (
        <UserAdd values={values} handleChange={handleChange} handleSubmit={handleSubmit}></UserAdd>
    );
}

export default UserAddComponent;