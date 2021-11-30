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

    // console.log(flashcard);

    useEffect(() => {
        dispatch(fetchFlashcard(card_id))
            .then(res => setFlashcard({
                question: res.flashcards.data.question,
                answer: res.flashcards.data.answer
            }))
    }, []);

    return (
        <div className="card-edit-container">
            <form>
                <div className="card-edit-question">
                    <label>Question:</label>
                    <br />
                    <input type="textarea"
                        className="question-edit-field"
                        value={flashcard.question}
                    />
                </div>
                <br />
                <div className="card-edit-answer">
                    <label>Answer:</label>
                    <br />
                    <input type="textarea" 
                        className="card-answer-field"
                        value={flashcard.answer}
                    />
                </div>
            </form>
        </div>
    )
}