import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { removeFlashcard } from "../../actions/flashcard_actions";
import { fetchUserFlashcards } from "../../actions/flashcard_actions";

export const Flashcard = (props) => {

    const [flashcard, setFlashcard] = useState({
        question: props.question,
        answer: props.answer
    });

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchUserFlashcards(props.user_id))
    },[flashcard])

    const handleDelete = (e) => {
        e.preventDefault();

        dispatch(removeFlashcard(props.id));

        setFlashcard({
            question: "",
            answer: ""
        });
    }

    const handleEdit = (e) => {
        e.preventDefault();

    }

    return (
        <div className="flashcard-container">
            <label>Question:</label>
            <br />
            <span>{props.question}</span>
            <br />
            <br />
            <label>Answer</label>
            <br />
            <span className="card-answer">{props.answer}</span>
            <br />
            <br />
            <span onClick={handleDelete}>DELETE</span>
            <br />
            <br />
            <span onClick={handleEdit}>UPDATE</span>
            {/* <Link to={{
                pathname: "/flashcards/edit",

                
            }}>
            UPDATE
            </Link> */}
        </div>
    )
}