const express = require("express");
const router = express.Router();
const Task = require("../../models/Task");
const validateTaskInput = require('../../validation/tasks');
const passport = require("passport");
const keys = require("../../config/keys");
const jwt = require("jsonwebtoken");

router.post('/',
    passport.authenticate('jwt', { session: false }),
    (req, res) => {
        const { errors, isValid } = validateTaskInput(req.body);

        if (!isValid) {
            return res.status(400).json(errors);
        }

        const newTask = new Task({
            task: req.body.task,
            user: req.user.id
        });

        newTask.save().then(task => res.json(task));
    }
);

router.get('/', passport.authenticate('jwt', { session: false }), (req, res) => {
    Task.find({
        user: req.user.id
    })
        .sort({ date: -1 })
        .then(tasks => res.json(tasks))
        .catch(err => res.status(404).json({ notasksfound: 'No tasks found' }));
});

router.put('/:id', async(req,res) => {
    try {
        const task = await Task.findOneAndUpdate(
            {_id: req.params.id},
            req.body
        )
        res.send(task)
    } catch (error) {
        res.send(error)
    }
})

router.delete('/:id', async(req,res) => {
    try {
        const task = await Task.findByIdAndDelete(req.params.id);
        res.send(task);
    } catch (error) {
        res.send(error)
    }
})

module.exports = router;
