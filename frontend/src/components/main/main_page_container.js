import { connect } from "react-redux"
import MainPage from "./main_page"
import { logout } from '../../actions/session_actions';


const mSTP = (state) => {
    return {
        currentUser: state.session.user
    }
}

export default connect(mSTP, {logout})(MainPage)