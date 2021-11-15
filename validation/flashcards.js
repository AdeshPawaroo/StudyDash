const Validator = require("validator");
const validText = require("./valid-text");

module.exports = function validateFlashcardInput(data) {
    let errors = {};

    data.question = validText(data.question) ? data.question : "";
    data.answer = validText(data.answer) ? data.answer : "";

    if (!Validator.isEmpty(data.question)) {
        errors.question = "Question cannot be blank!";
    }

    if (!Validator.isEmpty(data.answer)) {
        errors.answer = "Answer cannot be blank!";
    }

    return {
        errors,
        isValid: Object.keys(errors).length === 0
    }

}