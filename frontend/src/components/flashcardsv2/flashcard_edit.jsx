import React, {useRef, useEffect} from "react";
import { useDispatch } from "react-redux";

import { fetchFlashcard } from "../../actions/flashcard_actions";

export const FlashcardEdit = (props) => {

    const dispatch = useDispatch();

    // useEffect(() => {
    //     dispatch(fetchFlashcard(props.id))
    // })

    return (
        <div className="edit-card-container">
            <form className="edit-card-form">

            </form>
        </div>
    ) 
}