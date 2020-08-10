import React from 'react';
import { useHistory } from "react-router-dom";

import validate from '../../validations/UserAddValidation.js';
import useForm from '../../hooks/useForm.js';
import UserAdd from './UserAdd.js';

const UserAddComponent = () => {

    const initialValues = {
        name: '',
        lastName: '',
        phone: '',
        streetNumber: '',
        streetName: '',
        city: '',
        email: ''
    };

    const onSubmit = () => {
        console.log("on Submit");
    }

    const history = useHistory();

    const goBackToList = () => {
        history.push("/");
    }

    const { values, handleChange, handleSubmit, errors } = useForm({initialValues}, onSubmit, validate);

    return (
        <UserAdd values={values} handleChange={handleChange} handleSubmit={handleSubmit} 
            goBackToList={goBackToList} errors={errors}></UserAdd>
    );
}

export default UserAddComponent;