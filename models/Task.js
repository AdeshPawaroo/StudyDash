// const mongoose = require('mongoose');
// const Schema = mongoose.Schema;

// const TaskSchema = new Schema({
//     user: {
//         type: Schema.Types.ObjectId,
//         ref: 'users'
//     },
//     task: {
//         type: String,
//         required: true 
//     },
//     dueDate: {
//         type: Date,
//     },
//     completed: {
//         type: Boolean, 
//         default: false 
//     }
// });

// const Task = mongoose.model('Task', TaskSchema);
// module.exports = Task;

// const mongoose = require("mongoose");
// const Schema = mongoose.Schema;

// const taskSchema = new Schema({
//     task: {
//         type: String,
//         required: true,
//     },
//     completed: {
//         type: Boolean,
//         default: false,
//     },
// });

// module.exports = mongoose.model("task", taskSchema);

const mongoose = require('mongoose');
const { Schema } = mongoose;
const { ObjectId } = mongoose.Schema.Types;

const TaskSchema = new Schema({
    task: {
        type: String,
        required: true
    },
    isCompleted: {
        type: Boolean,
        default: false
    },
    date: {
        type: Date,
        default: Date.now
    },
    user: {
        type: Schema.Types.ObjectId,
        ref: 'users'
    }
});

module.exports = mongoose.model('Task', TaskSchema);