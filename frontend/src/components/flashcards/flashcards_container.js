import { connect } from "react-redux";
import { withRouter } from "react-router";
import { fetchFlashcards } from "../../actions/flashcard_actions";
import Flashcards from "./flashcards";

const mSTP = (state) => ({
    flashcards: Object.values(state.flashcards.all)
});

const mDTP = (dispatch) => ({
    fetchFlashcards: () => dispatch(fetchFlashcards())
});

export default withRouter(connect(mSTP, mDTP)(Flashcards));