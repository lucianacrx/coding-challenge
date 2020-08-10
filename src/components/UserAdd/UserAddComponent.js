import React from 'react';
import { useHistory } from "react-router-dom";

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

    const validations = {
        name: {
            required: true,
            message: 'Name is required'
        },
        lastName: {
            required: true,
            message: 'Last name is required'
        },
        phone: {
            required: true,
            message: 'Phone is required',
            pattern: {
                value: 'phone',
                message: 'Invalid phone number'
            }
        },
        city: {
            required: true,
            message: 'City is required'
        },
        email: {
            required: true,
            message: 'Email is required',
            pattern: {
                value: 'email',
                message: 'Invalid email'
            }
        }
    }

    const { values, handleChange, handleSubmit } = useForm({initialValues}, onSubmit, validations);

    return (
        <UserAdd values={values} handleChange={handleChange} handleSubmit={handleSubmit} goBackToList={goBackToList}></UserAdd>
    );
}

export default UserAddComponent;