const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const passport = require('passport');

const validateFlashcardInput = require("../../validation/flashcards");
const Flashcard = require("../../models/Flashcard");

router.get("/test", (req, res) => {
    res.json({ msg: "This is the flashcard route" });
});

router.get("/", (req, res) => {
    Flashcard
        .find()
        .sort({ date: -1 })
        .then(flashcards => res.json(flashcards))
        .catch(err => res.status(400).json(err));
});

router.get("/user/:user_id", (req, res) => {
    Flashcard 
        .find({ user: req.params.user_id })
        .then(flashcards => res.json(flashcards))
        .catch(err => res.status(400).json(err));
});

router.get("/:id", (req, res) => {
    Flashcard  
        .findById(req.params.id)
        .then(flashcard => res.json(flashcard))
        .catch(err => res.status(400).json(err));
});

//MIGHT NEED MORE ROUTES HERE LATER -- ONLY BASIC ONES IMPLEMENTED

router.post("/",
    passport.authenticate('jwt', { session: false }),
    (req, res) => {
        const { isValid, errors } = validateFlashcardInput(req.body);

        if (!isValid) {
            return res.status(400).json(errors);
        }

        const newFlashcard =  new Flashcard({
            user: req.user.id,
            question: req.body.question,
            answer: req.body.answer
        });

        newFlashcard
            .save()
            .then(flashcard => res.json(flashcard));
    }
);

module.exports = router;