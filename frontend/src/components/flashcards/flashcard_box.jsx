import React from 'react';

class FlashcardBox extends React.Component {
    constructor(props) {
        super(props)
    }

    render () {
        console.log(this.props);
        return (
            <div>
                Question: {this.props.question}
                <br/>
                Answer: {this.props.answer}
                <br/>
                User: {this.props.user}
                <br/>
                <br/>
            </div>            
        )
    }
}

export default FlashcardBox;