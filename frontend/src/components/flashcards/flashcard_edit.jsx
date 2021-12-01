import React, { Component } from 'react';
import axios from 'axios';

class FlashcardEdit extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            question: '',
            answer: ''
        }


        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleClick = this.handleClick.bind(this);
    }

    componentDidMount() {
        axios.get('http://localhost:5000/api/flashcards/' + this.props.match.params.flashcard_id)
            .then(res => {
                this.setState({
                    question: res.data.question,
                    answer: res.data.answer
                })
            })
            .catch(err => console.log(err));
    }

    onChangeQuestion = (e) => {
        this.setState({
            question: e.target.value
        });
    }

    onChangeAnswer = (e) => {
        this.setState({
            answer: e.target.value
        });
    }

    handleSubmit(e) {
        e.preventDefault();
        const obj = {
            question: this.state.question,
            answer: this.state.answer
        }
        axios.post('http://localhost:5000/api/flashcards/' + this.props.match.params.flashcard_id, obj)
            .then(res => console.log(res.data))
            .catch(err => console.log(err))

        // this.props.history.push("/flashcards/user");
    }

    // handleSubmit(e) {
    //     e.preventDefault();

        
    // }

    handleClick(e) {
        e.preventDefault();

        this.props.history.push("/flashcards/user");
    }

    render() {
        return(
            <div className='card-edit-container'>
                <h1 className='card-edit-header'>Update Flashcard!</h1>
                <form onSubmit={this.handleSubmit}>
                    <div className='card-edit-form'>
                        <p className='edit-question-header'>Question:</p>
                        <br />
                        <input type="textarea" 
                            value={this.state.question}
                            onChange={this.onChangeQuestion}
                            className="edit-question-field"
                        />
                        <p className='edit-answer-header'>Answer:</p>
                        <br />
                        <input type="textarea" 
                            value={this.state.answer}
                            onChange={this.onChangeAnswer}
                            className="edit-answer-field"
                        />
                        <input className='edit-submit' type="submit" value="Update Flashcard" />
                        <button className='edit-go-back' onClick={this.handleClick}> Go Back to Your Flashcards!</button>
                    </div>
                </form>
            </div>
        )
    }
}

export default FlashcardEdit;