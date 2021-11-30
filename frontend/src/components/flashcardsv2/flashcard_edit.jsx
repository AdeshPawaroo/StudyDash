import React, {useRef, useEffect} from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";

export const FlashcardEdit = (props) => {

    const dispatch = useDispatch();

    return (
        <div className="edit-card-container">
            <h1 id='profile-title'><Link to='/'>Study Dash</Link></h1>
            <form className="edit-card-form">
                here
            </form>
        </div>
    ) 
}