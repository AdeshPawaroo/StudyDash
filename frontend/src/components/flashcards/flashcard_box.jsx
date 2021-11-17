import React from 'react';
import { connect } from "react-redux";
import { removeFlashcard } from "../../actions/flashcard_actions";

class FlashcardBox extends React.Component {
    constructor(props) {
        super(props)

        this.handleUpdate = this.handleUpdate.bind(this);
        this.handleDelete = this.handleDelete.bind(this);
        this.handleShow = this.handleShow.bind(this);
        this.handleHide = this.handleHide.bind(this);
    }

    componentDidUpdate() {
        
    }

    handleUpdate(e) {
        e.preventDefault();

        window.location = `login#/flashcards/${this.props.card_id}`
    }

    handleDelete(e) {
        e.preventDefault();
        this.props.removeFlashcard(this.props.card_id);
    }

    handleShow(e) {
        e.preventDefault();
        document.getElementsByClassName("answer-container")[this.props.index].style.display = "flex";
    }

    handleHide(e) {
        e.preventDefault();
        document.getElementsByClassName("answer-container")[this.props.index].style.display = "none";
    }

    render () {
        console.log(this.props);
        return (
            <div className='flashcard-container'>
                <div className='question-container'>
                    Question: {this.props.question}
                </div>
                <br/>
                <div className='answer-container'>
                    Answer: {this.props.answer}
                </div>
                <button onClick={this.handleShow}>Click here to show the answer</button>
                <button onClick={this.handleHide}>Click here to hide the answer</button>
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