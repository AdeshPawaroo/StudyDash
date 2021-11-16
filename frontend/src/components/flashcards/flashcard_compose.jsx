import React from 'react';

class FlashcardCompose extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            question: "",
            answer: ""
            // newFlashcard: ""
        }

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(e) {
        e.preventDefault();
        let flashcard = {
            question: this.state.question,
            answer: this.state.answer
        }

        this.props.composeFlashcard(flashcard);
    }

    render() {
        return (
            <div>
                input
            </div>
        )
    }
}