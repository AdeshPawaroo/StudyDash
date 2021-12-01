import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { removeFlashcard } from "../../actions/flashcard_actions";
import { fetchUserFlashcards } from "../../actions/flashcard_actions";
import { Link } from "react-router-dom";

export const Flashcard = (props) => {

    const [flashcard, setFlashcard] = useState({
        question: props.question,
        answer: props.answer
    });

    const [flip, setFlip] = useState(false);

    const dispatch = useDispatch();
    const redir = `/flashcards/${props.card_id}`;

    useEffect(() => {
        dispatch(fetchUserFlashcards(props.user_id))
    },[flashcard])

    const handleDelete = (e) => {
        e.preventDefault();

        dispatch(removeFlashcard(props.card_id));

        setFlashcard({
            question: "",
            answer: ""
        });
    }

    // return (
    //         <div className="flashcard" onClick={() => setFlip(!flip)}>
    //             {flip ? flashcard.answer : flashcard.question}
    //             <Link to={redir} className="redir-update-card">UPDATE</Link>
    //             <span onClick={handleDelete}>DELETE</span>
    //         </div>
    // )

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
            <Link to={redir}>UPDATE</Link>
            {/* <span onClick={handleUpdate}>UPDATE</span> */}
        </div>
    )
}

