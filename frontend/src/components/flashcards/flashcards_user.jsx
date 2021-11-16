import React from 'react';
import FlashcardBox from './flashcard_box';

class Profile extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            flashcards: []
        }
    }

    componentDidMount() {
        console.log(this.props.currentUser.id);
        this.props.fetchUserFlashcards(this.props.currentUser.id);
    }

    componentWillReceiveProps(newState) {
        this.setState({ flashcards: newState.flashcards })
    }

    //returns all flashcards that belong to the current user
    render() {
        debugger
        if (this.state.flashcards.length == 0) {
            return(<div>Sorry, you don't have any flashcards created!</div>)
        } else {
            return (
                <div>
                    <h1>All of your Flashcards</h1>
                    {this.props.flashcards.map(flashcard => (
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
        // if (!this.props.flashcards) return null;
        // return (
        //     <div>
        //         here
        //        {/* <h1>All of the User's Flashcards</h1>
        //        {this.state.flashcards.map(flashcard => (

        //        ))} */}
        //     </div>
        // )
    }
}

export default Profile;