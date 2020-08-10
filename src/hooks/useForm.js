import React, { useState } from 'react';

const useForm = ({ initialValues }, onSubmit, validations) => {
    // To store values
    const [values, setValues] = useState(initialValues);
    const [errors, setErrors] = useState(initialValues);

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
            
        // validateFields(values);
        onSubmit(values);
    };

    const checkHasValue = value => value && value.length > 0;

    const checkEmailPattern = email => {
        const regex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return regex.test(email);
    }

    const checkPhonePattern = phone => {
        const regex = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im;
        return regex.test(phone);
    }

    // const validateFields = (values) => {
    //     Object.entries(values).map(([key, value]) => {
    //         if (validations[key] && validations[key].required) {
    //             checkHasValue(value);
    //             setErrors(errors => ({...errors, [validations[key]]: validations[key].message }));
    //         }
    
    //         if (validations[key] && validations[key].pattern === 'email') {
    //             checkEmailPattern(value);
    //             setErrors(errors => ({...errors, name: key, message: validations[key].pattern.message }));
    //         }
    
    //         if (validations[key] && validations[key].pattern === 'phone') {
    //             checkPhonePattern(value);
    //             setErrors(errors => ({...errors, name: key, message: validations[key].pattern.message }));
    //         }
    //     });

    //     console.log(errors);
    // }

    return { values, setValues, handleChange, handleSubmit }
}

export default useForm;