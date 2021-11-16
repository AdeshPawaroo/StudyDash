import React from "react";
import { withRouter } from 'react-router-dom';

class Flashcard extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.fetchFlashcards();
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