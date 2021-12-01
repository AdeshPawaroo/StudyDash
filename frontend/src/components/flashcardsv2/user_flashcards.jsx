import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

import { Flashcard } from "./flashcard";
import { fetchUserFlashcards } from "../../actions/flashcard_actions";

class UserFlashcards extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            flashcards: []
        }
    }

    componentDidMount() {
        this.props.fetchUserFlashcards(this.props.currUserID);
    }

    render() {
        return (
            <div className="user-cards-container">
                <h1 id='profile-title'><Link to='/'>Study Dash</Link></h1>
                <Link to="/flashcards/new" className="redir-create">Click here to create more flashcards!</Link>
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