import { connect } from "react-redux";
import { editFlashcard, fetchFlashcard } from "../../actions/flashcard_actions";
import FlashcardEdit from "./flashcard_edit";

const mSTP = (state) => ({
    currentUser: state.session.user,
    
    // updatedFlashcard: state.flashcards.new
});

const mDTP = (dispatch) => ({
    editFlashcard: data => dispatch(editFlashcard(data)),
    fetchFlashcard: id => dispatch(fetchFlashcard(id))
});

export default connect(mSTP, mDTP)(FlashcardEdit);