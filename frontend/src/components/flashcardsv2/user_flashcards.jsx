import React, {useState, useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { setState } from "react";
import { connect } from "react-redux";

import { Flashcard } from "./flashcard";
import { fetchUserFlashcards } from "../../actions/flashcard_actions";

class UserFlashcards extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            flashcards: this.props.flashcards
        }
    
        this.handleRedir = this.handleRedir.bind(this);
        this.handleShuffle = this.handleShuffle.bind(this)
    }

    redir_new = "/flashcards/new"


    componentDidMount() {
        this.props.fetchUserFlashcards(this.props.currUserID);
    }

    componentDidUpdate(prevProps, prevState) {
        if (this.props.flashcards !== prevProps.flashcards) {
            this.setState({
                flashcards: this.props.flashcards
            });
        }
    }

    handleRedir(e) {
        e.preventDefault();
        this.props.history.push(this.redir_new)
    }

    handleShuffle(e) {
        e.preventDefault();

        let arr = [...this.state.flashcards];

        for (let i = arr.length - 1; i > 0; i--) {
            let j = Math.floor(Math.random() * (i + 1));
            let temp = arr[i];
            arr[i] = arr[j];
            arr[j] = temp;
        }

        this.setState({
            flashcards: arr
        });
    }

    render() {
        return (
            <div className="user-cards-container">
                <h1 id='profile-title'><Link to='/'>Study Dash</Link></h1>
                <button onClick={this.handleRedir} className="new-redir-btn" >Click here to create more flashcards!</button>
                <button onClick={this.handleShuffle} className="shuffle-card-btn">Shuffle</button>
                <div className="user-cards">
                    {this.state.flashcards.map(flashcard => (
                       <div>
                            <Flashcard 
                                key={flashcard._id}
                                question={flashcard.question}
                                answer={flashcard.answer}
                                card_id={flashcard._id}
                                user_id={flashcard.user}
                            />
                       </div> 
                    ))}
                </div>
            </div>
        )
    }
}

const mSTP = state => ({
    flashcards: Object.values(state.flashcards.user),
    currUserID: state.session.user.id
});

const mDTP = dispatch => ({
    fetchUserFlashcards: id => dispatch(fetchUserFlashcards(id))
});

export default connect(mSTP, mDTP)(UserFlashcards)