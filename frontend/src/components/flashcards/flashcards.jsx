import React from "react";
import { withRouter } from 'react-router-dom';

class Flashcard extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            flashcards: []
        }
    }

    componentDidMount() {
        this.props.fetchFlashcards();
    }

    componentWillReceiveProps(newState) {
        this.setState({ flashcards: newState.flashcards });
    }

    //returns all flashcards
    render() {
        if (!this.props.tweets) return null;
        return(
            <div>
                here
            </div>
        );
    }
};

export default withRouter(Flashcard);