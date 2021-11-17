import React from 'react';
import { connect } from "react-redux";
import { removeFlashcard } from "../../actions/flashcard_actions";

class FlashcardBox extends React.Component {
    constructor(props) {
        super(props)

        this.handleUpdate = this.handleUpdate.bind(this);
        this.handleDelete = this.handleDelete.bind(this);
    }

    handleUpdate(e) {
        e.preventDefault();

        window.location = `login#/flashcards/${this.props.card_id}`
    }

    handleDelete(e) {
        e.preventDefault();
        this.props.removeFlashcard(this.props.card_id);
    }

    render () {
        console.log(this.props)
        // debugger
        return (
            <div>
                Question: {this.props.question}
                <br/>
                Answer: {this.props.answer}
                <br/>
                User: {this.props.user}
                <br/>
                Flashcard ID: {this.props.card_id}
                <br/>
                <br/>
                <button className="edit-btn" onClick={this.handleUpdate}>Edit</button>
                <button classNam="delete-btn" onClick={this.handleDelete}>Delete</button>
            </div>            
        )
    }
}

const mDTP = (dispatch) => ({
    removeFlashcard: id => dispatch(removeFlashcard(id))
});

export default connect(null, mDTP)(FlashcardBox);