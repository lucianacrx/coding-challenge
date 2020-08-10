import React, { useState } from 'react';
import { isObjectEmpty } from '../utils/FormUtils.js';

const useForm = ({ initialValues }, onSubmit, validate) => {
    const [values, setValues] = useState(initialValues);
    const [errors, setErrors] = useState({});

    const handleChange = (event) => {
        event.persist();
        setValues(values => ({ ...values, [event.target.name]: event.target.value }));
    };

    const handleSubmit = (event) => {
        if (event && typeof event.preventDefault === 'function') {
            event.preventDefault();
        }
            
        let formErrors = validate(values);
        setErrors(formErrors);

        if (isObjectEmpty(formErrors)) {
            onSubmit(values);
        }
    }

    return { values, setValues, handleChange, handleSubmit, errors }
}

export default useForm;