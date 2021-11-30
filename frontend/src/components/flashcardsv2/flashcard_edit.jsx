import axios from "axios";
import React, {useState, useEffect} from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { editFlashcard, fetchFlashcard } from "../../actions/flashcard_actions";


export const FlashcardEdit = (props) => {

    const [flashcard, setFlashcard] = useState({
        question: "",
        answer: ""
    });

    // const [newFlashcard, setNewFlashcard] = useState({
    //         question: "",
    //         answer: ""
    // });

    const dispatch = useDispatch();
    const card_id = props.match.params.flashcard_id;

    useEffect(() => {
        dispatch(fetchFlashcard(card_id))
            .then(res => setFlashcard({
                question: res.flashcards.data.question,
                answer: res.flashcards.data.answer
            }))
    }, []);
    
    const handleClick = (e) => {
        e.preventDefault();
        console.log(props);
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
            <form onSubmit={handleSubmit}>
                <div className="card-edit-question">
                    <label>Question:</label>
                    <br />
                    <input type="textarea"
                        className="question-edit-field"
                        value={flashcard.question}
                        onChange={handleQuestion}
                    />
                </div>
                <br />
                <div className="card-edit-answer">
                    <label>Answer:</label>
                    <br />
                    <input type="textarea" 
                        className="card-answer-field"
                        value={flashcard.answer}
                        onChange={handleAnswer}
                    />
                </div>
                <input className="edit-submit" type="submit" value="Update Flashcard" />
                <span onClick={handleClick}>Click here to go back to you flashcards!</span>
            </form>
        </div>
    )
}