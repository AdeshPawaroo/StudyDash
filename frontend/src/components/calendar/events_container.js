import { connect } from "react-redux";
import { withRouter } from "react-router";
import { createEvent, fetchEvents } from "../../actions/event_actions";
import Event from "./events"

const mSTP = (state) => ({
    events: Object.values(state.events.all)
});

const mDTP = (dispatch) => ({
    fetchEvents: () => dispatch(fetchEvents()),
    createEvent: event => dispatch(createEvent(event))
});

export default withRouter(connect(mSTP, mDTP)(Event));