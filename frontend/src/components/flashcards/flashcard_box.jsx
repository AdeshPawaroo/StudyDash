import React from 'react';

class FlashcardBox extends React.Component {
    constructor(props) {
        super(props)

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(e) {
        e.preventDefault();
        console.log(this.props.card_id)
    }

    render () {
        // debugger
        return (
            <div>
                Question: {this.props.question}
                <br/>
                Answer: {this.props.answer}
                <br/>
                User: {this.props.user}
                <br/>
                Flashcard ID: {this.props.card_id}
                <br/>
                <br/>
                <button onClick={this.handleClick}></button>
            </div>            
        )
    }
}

export default FlashcardBox;