import React, { useState } from 'react';

const useForm = ({ initialValues }, onSubmit) => {
    // To store values
    const [values, setValues] = useState(initialValues);

    // To handle changes on inputs
    const handleChange = (event) => {
        event.persist();
        setValues(values => ({ ...values, [event.target.name]: event.target.value }));
    };

    // To handle submits
    const handleSubmit = (event) => {
        if (event && typeof event.preventDefault === 'function') {
            event.preventDefault();
        }
        onSubmit(values);
    };

    return { values, setValues, handleChange, handleSubmit }
}

export default useForm;