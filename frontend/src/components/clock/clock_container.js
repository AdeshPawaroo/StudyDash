import { connect } from "react-redux"
import ClockPage from "./clock"
import { receiveTimeStudied,  editUser} from "../../actions/profile_actions";



const mSTP = (state) => {
    return {
        currentUser: state.session.user
    }
}

const mDTP = (dispatch) => {
    return {
        receiveTimeStudied: (timeStudied) => dispatch(receiveTimeStudied(timeStudied)),
        editUser: (user) => dispatch(editUser(user))
    }
}

export default connect(mSTP, mDTP)(ClockPage)