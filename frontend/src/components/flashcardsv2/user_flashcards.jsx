import React from "react";
import { Link } from "react-router-dom";
import { setState } from "react";
import { connect } from "react-redux";

import { Flashcard } from "./flashcard";
import { fetchUserFlashcards } from "../../actions/flashcard_actions";

class UserFlashcards extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            flashcards: []
        }
    
        this.handleRedir = this.handleRedir.bind(this);
    }

    redir_new = "/flashcards/new"

    componentDidMount() {
        this.props.fetchUserFlashcards(this.props.currUserID);
    }

    handleRedir(e) {
        e.preventDefault();
        this.props.history.push(this.redir_new)
    }

    render() {
        console.log(this.props.flashcards);
        return (
            <div className="user-cards-container">
                <h1 id='profile-title'><Link to='/'>Study Dash</Link></h1>
                <button onClick={this.handleRedir} className="new-redir-btn" >Click here to create more flashcards!</button>
                <div className="user-cards">
                    {this.props.flashcards.map(flashcard => (
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