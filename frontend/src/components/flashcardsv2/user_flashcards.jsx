import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
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
        console.log(this.props);
        return (
            <div className="user-cards-container">
                <Link to="/flashcards/new">Click here to create more flashcards!</Link>
                <h1 id='profile-title'><Link to='/'>Study Dash</Link></h1>
                <div className="user-cards">
                    {this.props.flashcards.map(flashcard => (
                       <div>
                           <Flashcard 
                                key={flashcard._id}
                                question={flashcard.question}
                                answer={flashcard.answer}
                                id={flashcard._id}
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