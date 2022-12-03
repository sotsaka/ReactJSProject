import React, { Component } from 'react';
import LoginForm from './LoginForm';
import '../styles/Connection.css'

class ConnectionForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: '',
            LoginOrSignup: true //true = login, false = signup
        };
    }

    LoginButton = () => {
        this.setState({ LoginOrSignup: !this.state.LoginOrSignup });
    }
    SignUpButton = () => {
        this.setState({ LoginOrSignup: !this.state.LoginOrSignup });
    }


    render() {
        return (
            <>
                {/* <h2 className="signup_link"> Not a member? <a href="/">Signup</a> </h2> */}
                <div className='wrapperbuttons'>
                    <input type="button" value="Login" className="Login" onClick={this.LoginButton} style={{ backgroundColor: this.state.LoginOrSignup ? '#a8b90c' : 'rgb(250, 250, 250)' }} />
                    <input type="button" value="SignUp" className="Signup" onClick={this.SignUpButton} style={{ backgroundColor: !this.state.LoginOrSignup ? '#a8b90c' : 'rgb(250, 250, 250)' }} />
                </div>

                <LoginForm type={this.state.LoginOrSignup} />
            </>
        );

    }
}
export default ConnectionForm;