import e from "cors";
import React, {useState, useEffect} from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { editFlashcard } from "../../actions/flashcard_actions";
import { fetchFlashcard } from "../../actions/flashcard_actions";

export const FlashcardEdit = (props) => {

    const [newFlashcard, setNewFlashcard] = useState({
        question: "",
        answer: ""
    });

    const dispatch = useDispatch();
    const card_id = props.match.params.flashcard_id;

    useEffect(() => {
        dispatch(fetchFlashcard(card_id))
            .then(res => {
                setNewFlashcard({
                    question: res.flashcards.data.question,
                    answer: res.flashcards.data.answer
                })
            })
    }, [])

    console.log(newFlashcard);
    
    const handleQuestionChange = (e) => {
        setNewFlashcard({
            question: e.target.value
        });
    }

    const handleAnswerChange = (e) => {
        setNewFlashcard({
            answer: e.target.value
        });
    }

    const handleSubmit = () => {
        e.preventDefault();

        const obj = {
            question: newFlashcard.question,
            answer: newFlashcard.answer
        }

        dispatch(editFlashcard(card_id, obj))
    }

    return (
        <div className="edit-card-container">
            <h1 id='profile-title'><Link to='/'>Study Dash</Link></h1>
            <form onSubmit={handleSubmit}>
                <div className="card-edit-form">
                    <p>Question:</p>
                    <br />
                    <input type="textarea" 
                        value={newFlashcard.question}
                        className="edit-question-field"
                        onChange={handleQuestionChange}
                    />
                    <p>Answer:</p>
                    <br />
                    <input type="textarea" 
                        value={newFlashcard.answer}
                        className="edit-question-field"
                        onChange={handleAnswerChange}
                    />
                    <input className="edit-submit" type="submit" value="Update Flashcard"/>
                    <Link to="/flashcards">Click here to go back to your flashcards!</Link>
                </div>
            </form>
        </div>
    ) 
}