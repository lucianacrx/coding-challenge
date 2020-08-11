import { checkHasValue, checkEmailPattern, checkPhonePattern } from '../utils/FormUtils.js';

export default function validate(values) {
    let errors = {};
    
    if (!checkHasValue(values.name)) {
        errors.name = 'Name is required';
    }

    if (!checkHasValue(values.lastName)) {
        errors.lastName	 = 'Last name is required';
    }

    if (!checkHasValue(values.phone) || !checkPhonePattern(values.phone)) {
        errors.phone = 'Invalid phone number';
    }

    if (!checkHasValue(values.city)) {
        errors.city = 'City is required';
    }

    if (!checkHasValue(values.email) || !checkEmailPattern(values.email)) {
        errors.email = 'Invalid email';
    }

    return errors;
};