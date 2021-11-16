import React from 'react';
import { withRouter } from 'react-router-dom';

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

    update(field) {
        return e => this.setState({
            [field]: e.currentTarget.value
        });
    }

    handleSubmit(e) {
        debugger
        e.preventDefault();
        let flashcard = {
            question: this.state.question,
            answer: this.state.answer
        }

        this.props.composeFlashcard(flashcard);
        this.setState({
            question: '',
            answer: ''
        })
    }

    render() {
        if (!this.props.composeFlashcard) return null
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                   <div>
                        <input type="textarea" 
                            value={ this.state.question }
                            onChange={ this.update('question') }
                            placeholder="Question"
                        />
                        <input type="textarea" 
                            value={ this.state.answer }
                            onChange={ this.update('answer') }
                            placeholder="Answer"
                        />
                        <input type='submit' value="Submit" />
                   </div>
                </form>
            </div>
        );
    }
}

export default withRouter(FlashcardCompose);