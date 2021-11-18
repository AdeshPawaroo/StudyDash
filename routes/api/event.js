const express = require('express');
const router = express.Router();
const passport = require('passport');
const validateEventInput = require('../../validation/event');
const Event = require('../../models/Event');
const keys = require("../../config/keys");
const jwt = require("jsonwebtoken");

router.get("/test", (req, res) => {
    res.json({msg: "This is the event route"});
});

router.post("/", 
    passport.authenticate("jwt", {session: false}), 
    (req, res) => {
        const { errors, isValid } = validateEventInput(req.body);

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

router.get('/', (req, res) => {
    Event.find((err, events) => {
        if (err)
            console.log(err);
        else {
            res.json(events);
        }
    });
});

module.exports = router;