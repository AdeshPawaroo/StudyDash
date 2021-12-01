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

    return (
        <div className='flashcard-container' >
            <div className="card-contents">
                <div className='question-container'>
                    Question: {props.question}
                </div>
                <div className='answer-container'>
                    Answer: {props.answer}
                </div>
            </div>
            <br/>
            
            <div className="card-buttons">
                <Link to={redir}>UPDATE</Link>
                <button className="delete-btn" onClick={handleDelete}>Delete</button>
            </div>
        </div>            
    )
}

