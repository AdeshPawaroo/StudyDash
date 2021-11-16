import React from 'react';

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
        // debugger
        if (!this.props.flashcards) return null;
        return (
            <div>
                here
               {/* <h1>All of the User's Flashcards</h1>
               {this.state.flashcards.map(flashcard => (

               ))} */}
            </div>
        )
    }
}

export default Profile;