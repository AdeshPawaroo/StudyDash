import React from "react";
import { Link } from "react-router-dom";


export const UserFlashcards = () => {

    // const handleCreate = (e) => {
    //     e.preventDefault();

    //     window.location = "/flashcards/new"
    // }

    return (
        // <span classname="span-create" onClick={handleCreate}>Click here to create a new flashcard!</span>
        <Link to="/flashcards/new">Click here to create a new flashcard!</Link>
    )
}