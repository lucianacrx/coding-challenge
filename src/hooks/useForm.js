import React, { useState } from 'react';
import { isObjectEmpty, checkEmailPattern, checkPhonePattern } from '../utils/FormUtils.js';

const useForm = ({ initialValues }, onSubmit, validate) => {
    const [values, setValues] = useState(initialValues);
    const [errors, setErrors] = useState({});
    const [submitted, setSubmitted] = useState(false);
    
    const handleChange = (event) => {
        event.persist();
        const { name, value, type } = event.target

        if (type === "tel" && !checkPhonePattern(value)) {
            setErrors(errors => ({...errors, [name]: 'Invalid phone number' }));
        } else if (type === "tel" && checkPhonePattern(value)) {
            setErrors(errors => ({...errors, [name]: '' }));
        }

        if (type === "email" && !checkEmailPattern(value)) {
            setErrors(errors => ({...errors, [name]: 'Invalid email' }));
        } else if (type === "email" && checkEmailPattern(value)) {
            setErrors(errors => ({...errors, [name]: '' }));
        }

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
            setSubmitted(true);
            setValues(initialValues);
        }
    }

    return { values, setValues, handleChange, handleSubmit, errors, submitted, setSubmitted }
}

export default useForm;