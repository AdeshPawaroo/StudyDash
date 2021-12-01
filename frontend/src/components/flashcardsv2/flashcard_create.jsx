import React from "react";
import { useState, useRef } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";

import { composeFlashcard } from "../../actions/flashcard_actions";

export const CreateFlashcard = () => {

    const [flashcard, setFlashcard] = useState({
        question: "",
        answer: ""
    })


    const dispatch = useDispatch();
    const _question = useRef(null);
    const _answer = useRef(null);

    const handleQuestion = () => {
        _question.current.focus();
        setFlashcard({
            question: _question.current.value,
            answer: flashcard.answer
        });
    }

    const handleAnswer = () => {
        _answer.current.focus();
        setFlashcard({
            question: flashcard.question,
            answer: _answer.current.value
        });
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(composeFlashcard(flashcard));

        setFlashcard({
            question: "",
            answer: ""
        });
        console.log("hereerererererere");
    }

    return (
        <div className="card-create-container">
            <form className="card-create-form" >
                <div>
                   <label>Question</label>
                   <br />
                    <input type="textarea" 
                        value={flashcard.question}
                        placeholder="Enter a question..."
                        className="question-field"
                        onChange={handleQuestion}
                        ref={_question}
                    />
                    <br />
                    <label>Answer</label>
                    <br />
                    <input type="textarea" 
                        value={flashcard.answer}
                        placeholder="Enter the answer..."
                        className="answer-field"
                        onChange={handleAnswer}
                        ref={_answer}
                    />
                    <br />
                    <br />
                    <button className="flashcard-create-btn" onClick={handleSubmit}>Create!</button>
                    <br />
                    <br />
                    {/* <span onClick={handleClick}>Click here to go back to your flashcards!</span> */}
                    <Link className="redir-cards" to="/flashcards">Click here to go back to your flashcards</Link>
                </div>
            </form>
        </div>
    )
}