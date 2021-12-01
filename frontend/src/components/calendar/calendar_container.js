import { connect } from "react-redux";
import { withRouter } from "react-router";
import Calendar from "./calendar";
import { fetchEvents, createEvent } from "../../actions/event_actions"

const mSTP = (state) => ({
    currentUser: state.session.user
});

const mDTP = (dispatch) => ({
    createEvent: event => dispatch(createEvent(event)),
    fetchEvents: () => dispatch(fetchEvents())
});

export default withRouter(connect(mSTP, mDTP)(Calendar));