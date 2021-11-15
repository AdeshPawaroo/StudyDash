const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const TaskSchema = new Schema({
    user: {
        type: Schema.Types.ObjectId,
        ref: 'users'
    },
    task: {
        type: String,
        required: true 
    },
    dueDate: {
        type: Date,
    },
    completed: {
        type: Boolean, 
        default: false 
    }
});

const Task = mongoose.model('Task', TaskSchema);
module.exports = Task;