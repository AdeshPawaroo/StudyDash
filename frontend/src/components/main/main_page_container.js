import { connect } from "react-redux"
import MainPage from "./main_page"
import { logout } from '../../actions/session_actions';
import { fetchUserFlashcards } from "../../actions/flashcard_actions";
import { getAllTodo } from "../../actions/todo_index";

const mSTP = (state) => {
    return {
        currentUser: state.session.user
    }
}

const mDTP = (dispatch) => ({
    fetchUserFlashcards: id => dispatch(fetchUserFlashcards(id)),
    getAllTodo: () => dispatch(getAllTodo()),
    logout: () => dispatch(logout())
});

export default connect(mSTP, mDTP)(MainPage)