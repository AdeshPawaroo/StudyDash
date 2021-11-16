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

    render() {
        if (!this.props.flashcards) return null;
        return (
            <div>
                here
            </div>
        )
    }
}

export default Profile;