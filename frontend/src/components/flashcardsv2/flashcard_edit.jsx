import React, {useState, useEffect} from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { editFlashcard } from "../../actions/flashcard_actions";
import { fetchFlashcard } from "../../actions/flashcard_actions";

export const FlashcardEdit = (props) => {

    const [newFlashcard, setFlashcard] = useState({
        question: "",
        answer: ""
    });

    const dispatch = useDispatch();

    console.log(newFlashcard)

    useEffect(() => {
        dispatch(fetchFlashcard(card_id))
            .then(res => {
                setFlashcard({
                    question: res.flashcards.data.question,
                    answer: res.flashcards.data.answer
                })
            })
    }, [])

    const card_id = props.match.params.flashcard_id;


    return (
        <div className="edit-card-container">
            <h1 id='profile-title'><Link to='/'>Study Dash</Link></h1>
            <form className="edit-card-form">
                hereadfsdfasdf
            </form>
        </div>
    ) 
}