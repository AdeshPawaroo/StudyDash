const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const passport = require('passport');

const validateFlashcardInput = require("../../validation/flashcards");
const Flashcard = require("../../models/Flashcard");

//TEST ROUTE
router.get("/test", (req, res) => {
    res.json({ msg: "This is the flashcard route" });
});

//FIND ALL -- SORTS BY DATE
router.get("/", (req, res) => {
    Flashcard
        .find()
        .sort({ date: -1 })
        .then(flashcards => res.json(flashcards))
        .catch(err => res.status(400).json(err));
});

//FIND BY USER ID
router.get("/user/:user_id", (req, res) => {
    Flashcard 
        .find({ user: req.params.user_id })
        .then(flashcards => res.json(flashcards))
        .catch(err => res.status(400).json(err));
});

//FIND BY FLASHCARD ID
router.get("/:id", (req, res) => {
    Flashcard  
        .findById(req.params.id)
        .then(flashcard => res.json(flashcard))
        .catch(err => res.status(400).json(err));
});

// EDIT
router.put("/:id", async(req, res) => {
    try {
        const flashcard = await Flashcard.findOneAndUpdate(
            { _id: req.params.id },
            req.body
        )
        res.send(flashcard)
    } catch (error) {
        res.send(error)
    }
});

//DELETE
router.delete("/:id", async(req, res) => {
    try {
        const flashcard = await Flashcard.findByIdAndDelete(req.params.id); 
        res.send(flashcard);
    } catch (error) {
        res.send(error)
    }
});

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