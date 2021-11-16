import { connect } from "react-redux";
import { fetchFlashcards } from "../../actions/flashcard_actions";
import Flashcards from "./flashcards";

const mSTP = (state) => ({
    flashcards: Object.values(state.flashcards.all)
});

const mDTP = (dispatch) => ({
    fetchFlashcards: () => dispatch(fetchFlashcards())
});

export default connect(mSTP, mDTP)(Flashcards);