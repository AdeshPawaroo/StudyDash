import { connect } from "react-redux"
import Profile from "./profile";
import { fetchUserFlashcards } from "../../actions/flashcard_actions";
import { getAllTodo } from "../../actions/todo_index";

const mSTP = (state) => {
    return {
        currentUser: state.session.user,
        flashcards: state.flashcards.user,
        todos: state.todos
    }
}

const mDTP = (dispatch) => ({
    fetchUserFlashcards: id => dispatch(fetchUserFlashcards(id)),
    getAllTodo: () => dispatch(getAllTodo())
});

//may need to export logout action
export default connect(mSTP, mDTP)(Profile)