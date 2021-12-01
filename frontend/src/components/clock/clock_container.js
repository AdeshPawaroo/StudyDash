import { connect } from "react-redux"
import ClockPage from "./clock"
import { receiveTimeStudied } from "../../actions/profile_actions";



const mSTP = (state) => {
    return {
        currentUser: state.session.user
    }
}

const mDTP = (dispatch) => {
    return {
        receiveTimeStudied: (timeStudied) => dispatch(receiveTimeStudied(timeStudied))
    }
}

export default connect(mSTP, mDTP)(ClockPage)