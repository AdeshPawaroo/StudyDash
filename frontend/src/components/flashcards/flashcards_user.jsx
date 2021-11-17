import React from 'react';
import FlashcardBox from './flashcard_box';
import { Link } from 'react-router-dom';
// import FlashcardCompose from './flashcard_compose_container'

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

    render() {
        let i = 0;
        // console.log(this.props);
        if (this.state.flashcards.length == 0) {
            return(
                <div>
                    <h1>Sorry, you don't have any flashcards created!</h1>
                     <Link to={'/flashcards/new'}>Create Some Here!</Link>
                </div>
            )

        } else {
            return (
                <div className='user-cards-container'>
                    <h1 className="user-cards-header">All of your Flashcards:</h1>
                    <br />
                    <Link to={'/flashcards/new'}>Click me to create a new flashcard!</Link>
                    <br />
                    {this.props.flashcards.map(flashcard => (
                        <div>
                            <FlashcardBox 
                                key={flashcard._id}
                                user={flashcard.user}
                                question={flashcard.question}
                                answer={flashcard.answer}
                                card_id={flashcard._id}
                                index={i}
                                />
                                {i = i + 1}
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