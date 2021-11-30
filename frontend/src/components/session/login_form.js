import React from 'react';
import { withRouter } from 'react-router-dom';
import { Link } from 'react-router-dom'

class LoginForm extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            email: '',
            password: '',
            errors: {}
        };

        this.handleSubmit = this.handleSubmit.bind(this);
        this.renderErrors = this.renderErrors.bind(this);
        this.demoUser = this.demoUser.bind(this);
    }

    // Once the user has been authenticated, redirect to the Tweets page
    componentWillReceiveProps(nextProps) {
        if (nextProps.currentUser === true) {
            this.props.history.push('/tweets');
        }

        // Set or clear errors
        this.setState({ errors: nextProps.errors })
    }

    // Handle field updates (called in the render method)
    update(field) {
        return e => this.setState({
            [field]: e.currentTarget.value
        });
    }

    // Handle form submission
    handleSubmit(e) {
        e.preventDefault();

        let user = {
            email: this.state.email,
            password: this.state.password
        };

        this.props.login(user);
    }

    demoUser(){
        this.setState({email: 'demo@demo.com', password: '123456', errors: {}})
        let user = {
            email: this.state.email,
            password: this.state.password
        };
        
        this.props.login(user);
    }

    // Render the session errors if there are any
    renderErrors() {
        return (
            <ul>
                {Object.keys(this.state.errors).map((error, i) => (
                    <li key={`error-${i}`}>
                        {this.state.errors[error]}
                    </li>
                ))}
            </ul>
        );
    }

    render() {
        return (
            <div className='login-div'>
                <h1 className='app-name form-app-name'>Study Dash</h1>
                <h2 className='form-title'>Welcome Back!</h2>
                <br />
                <form onSubmit={this.handleSubmit}>
                    <div>
                        <input className='form-input' type="text"
                            value={this.state.email}
                            onChange={this.update('email')}
                            placeholder="Email"
                        />
                        <input className='form-input' type="password"
                            value={this.state.password}
                            onChange={this.update('password')}
                            placeholder="Password"
                        />
                        <br />

                        <input type="submit" value="Log In" className="button2 auth-button"/>
                        <button onClick={this.demoUser} className="button2 auth-button">Demo User</button>
                        {this.renderErrors()}
                    </div>
                </form>
                <p className="signuplink"><Link to={'/signup'}>Don't have an account? Sign Up</Link></p>
            </div>
        );
    }
}

export default withRouter(LoginForm);