import React from "react";
import { withRouter } from 'react-router-dom';

class Event extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            events: [
                {
                    title: "Graduation Day!!! 🎓",
                    start: new Date(2021,11,-6, 15, 30),
                    end: new Date(2021,11,-6, 16, 0)
                }
            ]
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