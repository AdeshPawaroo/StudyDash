import React from "react";
import { useState, useRef } from "react";
import { useDispatch } from "react-redux";

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
    }

    return (
        <div>
            <h2>Create Form</h2>
            <form >
                <div className="card-create-form">
                   <label>Question</label>
                    <input type="textarea" 
                        value={flashcard.question}
                        placeholder="Enter a question..."
                        className="question-field"
                        onChange={handleQuestion}
                        ref={_question}
                    />

                    <input type="textarea" 
                        value={flashcard.answer}
                        placeholder="Enter the answer..."
                        className="answer-field"
                        onChange={handleAnswer}
                        ref={_answer}
                    />

                    <button className="flashcard-create-btn" onClick={handleSubmit}>Create!</button>
                </div>
            </form>
        </div>
    )
}