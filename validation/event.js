const Validator = require('validator');
const validText = require('./valid-text');

module.exports = function validateEventInput(data) {
    let errors = {};

    data.title = validText(data.title) ? data.title : ""; 

    if(!Validator.isLength(data.title, {max: 20})) {
        errors.title = "Event cannot be more than 20 characters long"
    }

    if(Validator.isEmpty(data.title)){
        errors.title = "Title is required"
    }

    return {
        errors,
        isValid: Object.keys(errors).length === 0
    }
}