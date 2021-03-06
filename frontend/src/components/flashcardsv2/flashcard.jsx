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

    const dispatch = useDispatch();
    const redir = `/flashcards/${props.card_id}`;

    // useEffect(() => {
    //     dispatch(fetchUserFlashcards(props.user_id))
    // },[flashcard])

    const handleDelete = (e) => {
        e.preventDefault();

        dispatch(removeFlashcard(props.card_id));

        setFlashcard({
            question: "",
            answer: ""
        });
    }

    const handleUpdate = (e) => {
        e.preventDefault();

    }

    return (
        <div className='flashcard-container' >
            <div className="card-contents">
                <div className='question-container'>
                    Question: 
                    < br />
                    < br />
                    {props.question}
                </div>
                <div className='answer-container'>
                    Answer: 
                    <br />
                    <br />
                    {props.answer}
                </div>
            </div>
            
            <div className="card-buttons">
                <Link className="update-card-btn" to={redir}>UPDATE</Link>
                <span className="delete-card-btn"onClick={handleDelete}>DELETE</span>


            </div>
        </div>            
    )
}

