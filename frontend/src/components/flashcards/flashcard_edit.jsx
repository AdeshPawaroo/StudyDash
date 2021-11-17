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

        this.props.history.push("/");
    }

    render() {
        return(
            <div>
                <h1>Update Flashcard</h1>
                <form onSubmit={this.handleSubmit}>
                    <div>
                        <input type="textarea" 
                            value={this.state.question}
                            onChange={this.onChangeQuestion}
                        />
                         <input type="textarea" 
                            value={this.state.answer}
                            onChange={this.onChangeAnswer}
                        />
                        <input type="submit" value="Update Flashcard" />
                    </div>
                </form>
            </div>
        )
    }
}

export default FlashcardEdit;

// import React from "react";

// class FlashcardEdit extends React.Component {
//     constructor(props) {
//         super(props);

//         this.state = {
//             question: "",
//             answer: ""
//         }

//         this.handleSubmit = this.handleSubmit.bind(this);
//     }

//     componentDidMount() {
//         this.props.fetchFlashcard(this.props.match.params.flashcard_id);
//     }

//     update(field) {
//         return e => this.setState({
//             [field]: e.currentTarget.value
//         });
//     }

//     handleSubmit(e) {
//         e.preventDefault();
//         let updatedFlashcard = {
//             question: this.state.question,
//             answer: this.state.answer
//         }

//         this.props.editFlashcard(this.props.match.params.flashcard_id);
//         window.location = "login#/flashcards/users"
//     }

//     render() {
//         // if (!this.props) return null
//         // console.log(this.props);
//         return (
//             <div>
//                 <h1>Update Flashcard</h1>
//                 <form onSubmit={this.handleSubmit}>
//                     <div>
//                         <input type="textarea"
//                             value={ this.state.question }
//                             onChange={ this.update('question') }
//                             placeholder="Update the question"
//                         />
//                         <input type="textarea"
//                             value={ this.state.answer }
//                             onChange={ this.update('answer') }
//                             placeholder="Update the answer"
//                         />
//                         <input type="submit" value='Submit' />
//                     </div>
//                 </form>
//             </div>
//         )
//     }
// }

// export default FlashcardEdit;



// import React from "react";

// class FlashcardEdit extends React.Component {
//     constructor(props) {
//         super(props);
//     }

//     update(field) {
//         return e => this.setState({
//             [field]: e.currentTarget.value
//         });
//     }

//     handleUpdate(e) {
//         e.preventDefault();
//         let updatedFlashcard = {
//             question: this.state.question,
//             answer: this.state.answer
//         }

//         this.props.editFlashcard(updatedFlashcard);
//         this.setState({
//             question: '',
//             answer: ''
//         })
//     }

//     render() {
//         if (!this.props.editFlashcard) return null
//         return (
//             <div>
//                 <form onSubmit={this.handleUpdate}>
//                    <div>
//                         <input type="textarea" 
//                             value={ this.state.question }
//                             onChange={ this.update('question') }
//                             placeholder="Question"
//                         />
//                         <input type="textarea" 
//                             value={ this.state.answer }
//                             onChange={ this.update('answer') }
//                             placeholder="Answer"
//                         />
//                         <input type='submit' value="Update" />
//                    </div>
//                 </form>
//             </div>
//         );
//     }
// }

// export default FlashcardEdit;