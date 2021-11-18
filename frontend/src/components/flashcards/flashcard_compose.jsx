import React from 'react';
import { Link, withRouter } from 'react-router-dom';

class FlashcardCompose extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            question: "",
            answer: ""
            // newFlashcard: ""
        }

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleClick = this.handleClick.bind(this);
    }

    update(field) {
        return e => this.setState({
            [field]: e.currentTarget.value
        });
    }

    handleSubmit(e) {
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

    handleClick(e) {
        e.preventDefault();

        this.props.history.push("/flashcards/user")
    }

    render() {
        if (!this.props.composeFlashcard) return null;  
        return (
            <div className='card-create-container'>
                <h1 className='card-create-header'>Create a Flashcard!</h1>
                <form onSubmit={this.handleSubmit}>
                   <div className='card-create-form'>
                        <input type="textarea" 
                            value={ this.state.question }
                            onChange={ this.update('question') }
                            placeholder="Question"
                            className='question-field'
                        />
                        <input type="textarea" 
                            value={ this.state.answer }
                            onChange={ this.update('answer') }
                            placeholder="Answer"
                            className='answer-field'
                        />
                        <input className='new-submit' type='submit' value="Submit" />
                   </div>
                </form>
                <button className='card-view-link' onClick={this.handleClick}>View Your Current Flashcards!</button>
            </div>
        );
    }
}

export default withRouter(FlashcardCompose);