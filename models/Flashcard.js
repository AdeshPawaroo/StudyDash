const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const FlashcardSchema = new Schema({
    user: {
        type: Schema.Types.ObjectId,
        ref: 'users'
    },
    question: {
        type: String,
        required: true
    },
    answer: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    }
});

const Flashcard = mongoose.model("flashcard", FlashcardSchema);

module.exports = Flashcard;