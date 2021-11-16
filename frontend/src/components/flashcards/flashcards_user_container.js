import { connect } from "react-redux";
import { fetchUserFlashcards } from "../../actions/flashcard_actions";
import Profile from "./flashcards_user";

const mSTP = (state) => ({
    flashcards: Object.values(state.flashcards.user),
    currentUser: state.session.user
});

const mDTP = (dispatch) => ({
    fetchUserFlashcards: id => dispatch(fetchUserFlashcards(id))
});

export default connect(mSTP, mDTP)(Profile);