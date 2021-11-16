import React from "react";
import { withRouter } from 'react-router-dom';
import FlashcardBox from "./flashcard_box";

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
        debugger
        // if (!this.state.flashcards) return null;
        if (this.state.flashcards.length === 0) {
            return (<div>There are no Flashcards</div>)
        }else {
            return(
                <div>
                    <h1>All Flashcards</h1>
                    {this.state.flashcards.map(flashcard => (
                        <div>
                            <FlashcardBox 
                                key={flashcard._id}
                                user={flashcard.user}
                                question={flashcard.question}
                                answer={flashcard.answer}
                            />
                        </div>
                    ))}
                </div>
            );
        }
    }
};

export default withRouter(Flashcard);