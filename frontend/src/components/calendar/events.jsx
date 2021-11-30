import React from "react";
import { withRouter } from 'react-router-dom';

class Event extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            events: []
        }
    }

    // componentDidMount() {
    //     this.props.fetchFlashcards();
    // }

    // componentWillReceiveProps(newState) {
    //     this.setState({ flashcards: newState.flashcards });
    // }

    
};

export default withRouter(Event);