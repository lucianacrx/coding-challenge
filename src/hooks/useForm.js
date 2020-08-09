import React, { useState } from 'react';

const useForm = (initialValues = {}) => {
    // To store values
    const [values, setValues] = useState(initialValues);

    // To handle changes, checks types of inputs
    const handleChange = (e) => {
        const { type, name } = e.target;
    
        const getValue = () => {
            if (type === 'checkbox') {
                return e.target.checked;
            }
            else if (type === 'select-multiple') {
                return Array.from(e.target.selectedOptions)
                    .map(o => o.value);
            }
            return e.target.value;
        }
    
        const value = getValue();
        setValues(prevValues => ({ ...prevValues, [name]: value }));
    };
}