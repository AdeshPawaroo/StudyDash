import React from 'react';

class MainPage extends React.Component {
    constructor(props){
        super(props)
        this.logoutUser = this.logoutUser.bind(this);
    }

    logoutUser(e) {
        e.preventDefault();
        this.props.logout();
    }

    render() {
        console.log(this.props)
        let greeting = ''
        if(this.props.currentUser){
            greeting = (
                <div>
                    <h2>Hello, {this.props.currentUser.handle}</h2>
                    <button onClick={this.logoutUser}>Logout</button> 
                </div>
            )

        }
        return (
            <div>
                <h1>Study Dash</h1>
                {/* <h2>{greeting}</h2>
                <button onClick={this.logoutUser}>Logout</button> */}
                {greeting}
                <br />
                <footer>
                    Copyright &copy; 2021 StudyDash
                </footer>
            </div>
        );
    }
}

export default MainPage;