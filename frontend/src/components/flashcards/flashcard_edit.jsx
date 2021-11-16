import React from "react";

class FlashcardEdit extends React.Component {
    constructor(props) {
        super(props)
    }

    componentDidMount() {
        
    }

    render() {
        return (
            <div>

            </div>
        )
    }
}

export default FlashcardEdit;



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