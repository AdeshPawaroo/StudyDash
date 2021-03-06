import React from 'react';
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { removeFlashcard } from "../../actions/flashcard_actions";

class FlashcardBox extends React.Component {
    constructor(props) {
        super(props);

        // this.state = {
        //     question: '',
        //     answer: '',
        //     deleted: false
        // }

        this.handleUpdate = this.handleUpdate.bind(this);
        this.handleDelete = this.handleDelete.bind(this);
        this.handleShow = this.handleShow.bind(this);
        this.handleHide = this.handleHide.bind(this);
        // this.handleRefresh = this.handleRefresh.bind(this);
    }

    handleUpdate(e) {
        e.preventDefault();

        this.props.history.push(`/flashcards/${this.props.card_id}`)
    }

    handleDelete(e) {
        e.preventDefault();
        this.props.removeFlashcard(this.props.card_id);
        // this.render();
        // console.log(this.state);
        // let state = {
        //     question: '',
        //     answer: '',
        //     deleted: true
        // }
        // this.setState({state});
        // console.log(this.state);
    }

    // handleRefresh() {
    //     this.props.history.push("/flashcards/user")
    // }

    handleShow(e) {
        e.preventDefault();
        document.getElementsByClassName("answer-container")[this.props.index].style.display = "flex";
        document.getElementsByClassName("answer-container")[this.props.index].style.width = "100%";
        document.getElementsByClassName("answer-container")[this.props.index].style.height = "20%";
        document.getElementsByClassName("answer-container")[this.props.index].style.overflowWrap = "break-word";
        document.getElementsByClassName("answer-container")[this.props.index].style.flexDirection = "column";
        document.getElementsByClassName("answer-container")[this.props.index].style.fontWeight = "bold";
        document.getElementsByClassName("answer-container")[this.props.index].style.fontSize = "2vh";
    }

    handleHide(e) {
        e.preventDefault();
        document.getElementsByClassName("answer-container")[this.props.index].style.display = "none";
    }

    render () {
        // if (!this.props) return null
        // console.log(this.props);
        return (
            <div className='flashcard-container' onMouseOver={this.handleShow} onMouseOut={this.handleHide} >
                <div className='question-container'>
                    Question: {this.props.question}
                </div>
                <br/> 
                <div className='answer-container'>
                    Answer: {this.props.answer}
                </div>
                {/* <button className='show-btn' onClick={this.handleShow}>Click here to show the answer</button>
                <button className='hide-btn' onClick={this.handleHide}>Click here to hide the answer</button> */}
                <br/>
                <button className="edit-btn" onClick={this.handleUpdate}>Edit</button>
                <button className="delete-btn" onClick={this.handleDelete}>Delete</button>
                {/* <button className="delete-btn" onClick={ () => this.props.removeFlashcard(this.props.flashcards.card_id)  }></button> */}
            </div>            
        )
    }
}

// co      

const mDTP = (dispatch) => ({
    removeFlashcard: id => dispatch(removeFlashcard(id))
});

export default withRouter(connect(null, mDTP)(FlashcardBox));