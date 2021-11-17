import { connect } from "react-redux";
import { composeFlashcard } from "../../actions/flashcard_actions";
import FlashcardCompose from "./flashcard_compose";

const mSTP = (state) => ({
    currentUser: state.session.user,
    newFlashcard: state.flashcards.new
});

const mDTP = (dispatch) => ({
    composeFlashcard: data => dispatch(composeFlashcard(data))
});

export default connect(mSTP, mDTP)(FlashcardCompose);