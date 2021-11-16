const express = require("express");
const todoRoutes = express.Router();
let Todo = require('./../../models/Todo');
const passport = require("passport");
const keys = require("../../config/keys");
const jwt = require("jsonwebtoken");
const router = express.Router();

// todoRoutes.route('/').get((req, res) => {
//     Todo.find((err, todos) => {
//         if (err)
//             console.log(err);
//         else {
//             res.json(todos);
//         }
//     });
// });

router.get('/', (req, res) => {
    Todo.find((err, todos) => {
        if (err)
            console.log(err);
        else {
            res.json(todos);
        }
    });
});

router.get('/:id', (req, res) => {
    const id = req.params.id;
    Todo.findById(id, (err, todo) => {
        res.json(todo);
    });
});
// todoRoutes.route('/:id').get((req, res) => {
//     const id = req.params.id;
//     Todo.findById(id, (err, todo) => {
//         res.json(todo);
//     });
// });

router.post('/add', (req, res) => {
    const todo = new Todo(req.body);
    todo.save()
        .then(todo => {
            res.status(200).json({ 'todo': 'todo added successfully' });
        })
        .catch(err => {
            res.status(400).send('adding new todo failed');
        });
});
// todoRoutes.route('/add').post((req, res) => {
//     const todo = new Todo(req.body);
//     todo.save()
//         .then(todo => {
//             res.status(200).json({ 'todo': 'todo added successfully' });
//         })
//         .catch(err => {
//             res.status(400).send('adding new todo failed');
//         });
// });

router.post('/update/:id', (req, res) => {
    Todo.findById(req.params.id, (err, todo) => {
        if (!todo)
            res.status(404).send('Data is not found');
        else {
            todo.todo_description = req.body.todo_description;
            todo.todo_responsible = req.body.todo_responsible;
            todo.todo_priority = req.body.todo_priority;
            todo.todo_completed = req.body.todo_completed;
            todo.save().then(todo => {
                res.json('Todo updated');
            })
                .catch(err => {
                    res.status(400).send("Update not possible");
                });
        }
    });
});

// todoRoutes.route('/update/:id').post((req, res) => {
//     Todo.findById(req.params.id, (err, todo) => {
//         if (!todo)
//             res.status(404).send('Data is not found');
//         else {
//             todo.todo_description = req.body.todo_description;
//             todo.todo_responsible = req.body.todo_responsible;
//             todo.todo_priority = req.body.todo_priority;
//             todo.todo_completed = req.body.todo_completed;
//             todo.save().then(todo => {
//                 res.json('Todo updated');
//             })
//                 .catch(err => {
//                     res.status(400).send("Update not possible");
//                 });
//         }
//     });
// });

module.exports = router;