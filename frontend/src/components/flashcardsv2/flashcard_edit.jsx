import axios from "axios";
import React, {useState, useEffect} from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { fetchFlashcard } from "../../actions/flashcard_actions";


export const FlashcardEdit = (props) => {

    const [flashcard, setFlashcard] = useState({
        question: "",
        answer: ""
    });

    const dispatch = useDispatch();
    const card_id = props.match.params.flashcard_id;

    useEffect(() => {
        dispatch(fetchFlashcard(card_id))
            .then(res => setFlashcard({
                question: res.flashcards.data.question,
                answer: res.flashcards.data.answer
            }))
    }, []);

    const handleRedir = (e) => {
        e.preventDefault();

        props.history.push("/flashcards")
    }

    const handleQuestion = (e) => {
        setFlashcard({
            question: e.target.value,
            answer: flashcard.answer
        })
    }

    const handleAnswer = (e) => {
        setFlashcard({
            question: flashcard.question,
            answer: e.target.value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const data = {
            question: flashcard.question,
            answer: flashcard.answer
        }
        axios.post(`/api/flashcards/${card_id}`, data)
            .then(res => console.log(res.data))
            .catch(err => console.log(err))
    }

    return (
        <div className="card-edit-container">
            <form className="card-edit-form-container" >
                <div className="card-edit-form">
                    <label className="question-edit-label">Question:</label>
                    <br />
                    <input type="textarea"
                        className="question-edit-field"
                        value={flashcard.question}
                        onChange={handleQuestion}
                    />
                    <br />
                    <label>Answer:</label>
                    <br />
                    <input type="textarea" 
                        className="card-answer-field"
                        value={flashcard.answer}
                        onChange={handleAnswer}
                    />
                    <br />
                    <br />
                    <button className="flashcard-edit-btn" onClick={handleSubmit}>Update!</button>
                    <br />
                    <br />
                    <br />
                    <br />
                    <button className="redir-cards2" onClick={handleRedir}>Click here to back to your flashcards!</button>
                </div>
            </form>
        </div>
    )
}