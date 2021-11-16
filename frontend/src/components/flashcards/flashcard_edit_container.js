import { connect } from "react-redux";
import { editFlashcard } from "../../actions/flashcard_actions";
import FlashcardEdit from "./flashcard_edit";

const mSTP = (state) => ({
    currentUser: state.session.user,
    updatedFlashcard: state.flashcards.new
});

const mDTP = (dispatch) => ({
    editFlashcard: data => dispatch(editFlashcard(data))
});

export default connect(mSTP, mDTP)(FlashcardEdit);