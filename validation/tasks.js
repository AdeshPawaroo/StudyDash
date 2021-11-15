const Validator = require('validator');
const validText = require('./valid-text');

module.exports = function validateTaskInput(data) {
    let errors = {};


    data.task = validText(data.task) ? data.task : '';

    if (!Validator.isLength(data.task, { min: 2, max: 140 })) {
        errors.task = 'Task must be between 2 and 140 characters';
    }

    if (Validator.isEmpty(data.task)) {
        errors.task = 'Task info is required';
    }

    return {
        errors,
        isValid: Object.keys(errors).length === 0
    };
};