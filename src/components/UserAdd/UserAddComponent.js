import React from 'react';
import { useHistory } from "react-router-dom";
import Snackbar from '@material-ui/core/Snackbar';

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
        // TODO - Here goes any aditional function we want to pass to useForm hook
    }

    const history = useHistory();

    const goBackToList = () => {
        history.push("/");
    }

    const { values, handleChange, handleSubmit, errors, submitted, setSubmitted } = useForm({initialValues}, onSubmit, validate);

    return (
        <React.Fragment>
        <UserAdd values={values} handleChange={handleChange} handleSubmit={handleSubmit} 
            goBackToList={goBackToList} errors={errors}></UserAdd>
        <Snackbar
            anchorOrigin={ { vertical: 'top', horizontal: 'right'} }
            open={submitted} autoHideDuration={3000} onClose={() => setSubmitted(false)}
            message="User created successfully. Go back to User List."
        />
        </React.Fragment>
    );
}

export default UserAddComponent;