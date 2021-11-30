import { connect } from "react-redux"
import ClockPage from "./clock"



const mSTP = (state) => {
    console.log(state);
    return {
        currentUser: state.session.user
    }
}

export default connect(mSTP)(ClockPage)