const express = require('express');
const router = express.Router();
const passport = require('passport');
const mongoose = require("mongoose");
const validateEventInput = require('../../validation/event');
const Event = require('../../models/Event');

router.get("/test", (req, res) => {
    res.json({msg: "This is the event route"});
});

router.post("/", 
    passport.authenticate("jwt", {session: false}), 
    (req, res) => {
        const { isValid, errors } = validateEventInput(req.body);

        if(!isValid) {
            return res.status(400).json(errors);
        }

        const newEvent = new Event({
            title: req.body.title,
            start: req.body.start,
            end: req.body.end
        })

        newEvent.save().then(event => res.json(event));
    }
)

router.get("/", (req, res) => {
    Event 
        .find()
        .then(events => res.json(events))
        .catch(err => res.status(400).json(err));
});

module.exports = router;