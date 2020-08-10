import React, { useState } from 'react';

const useForm = ({ initialValues }, onSubmit, validate) => {
    const [values, setValues] = useState(initialValues);
    const [errors, setErrors] = useState({});

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
            
        setErrors(validate(values));
        console.log(errors);

        if (errors) {
            onSubmit(values);
        }
    }

    return { values, setValues, handleChange, handleSubmit, errors }
}

export default useForm;