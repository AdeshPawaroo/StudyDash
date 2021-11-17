import React from 'react';
import { connect } from "react-redux";
import { removeFlashcard } from "../../actions/flashcard_actions";

class FlashcardBox extends React.Component {
    constructor(props) {
        super(props)

        this.handleUpdate = this.handleUpdate.bind(this);
        this.handleDelete = this.handleDelete.bind(this);
        this.handleClick = this.handleClick.bind(this);
    }

    handleUpdate(e) {
        e.preventDefault();

        window.location = `login#/flashcards/${this.props.card_id}`
    }

    handleDelete(e) {
        e.preventDefault();
        this.props.removeFlashcard(this.props.card_id);
    }

    handleClick(e) {
        e.preventDefault();

        document.getElementsByClassName("answer-container")[0].style.display = "flex";
    }

    render () {
        console.log(this.props)
        // debugger
        return (
            <div className='flashcard-container'>
                <div className='question-container'>
                    Question: {this.props.question}
                </div>
                <br/>
                <div className='answer-container'>
                    Answer: {this.props.answer}
                </div>
                <button onClick={this.handleClick}>Click here to show the answer</button>
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