import React from 'react';

class Profile extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        console.log(this.props.currentUser.id);
        this.props.fetchUserFlashcards(this.props.currentUser.id);
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