import { connect } from "react-redux"
import ClockPage from "./clock_page"



const mSTP = (state) => {
    return {
        currentUser: state.session.user
    }
}

export default connect(mSTP)(ClockPage)