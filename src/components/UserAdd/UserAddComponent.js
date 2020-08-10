import React, { useState } from 'react';
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

    const [open, setOpen] = useState(false);

    const onSubmit = () => {
        //setOpen(true);
    }

    const history = useHistory();

    const goBackToList = () => {
        history.push("/");
    }

    const { values, handleChange, handleSubmit, errors } = useForm({initialValues}, onSubmit, validate);

    return (
        <React.Fragment>
        <UserAdd values={values} handleChange={handleChange} handleSubmit={handleSubmit} 
            goBackToList={goBackToList} errors={errors}></UserAdd>
        <Snackbar
            anchorOrigin={ { vertical: 'top', horizontal: 'right'} }
            open={open} autoHideDuration={6000} onClose={() => setOpen(false)}
            message="User created successfully. Go back to User List."
        />
        </React.Fragment>
    );
}

export default UserAddComponent;