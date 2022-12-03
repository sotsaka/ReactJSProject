import React, { Component } from 'react';
import '../styles/LoginForm.css';

class LoginForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: "",
            pass: "",
            confirmpass: ""
        };

        this.handleChangeEmail = this.handleChangeEmail.bind(this);
        this.handleChangePass = this.handleChangePass.bind(this);
        this.handleSubmitLogin = this.handleSubmitLogin.bind(this);
        
        this.handleChangeConfirmPass = this.handleChangeConfirmPass.bind(this);
        this.handleSubmitSignUp = this.handleSubmitSignUp.bind(this);

    }
    handleChangeEmail(event) {
        this.setState({ email: event.target.value });
    }
    handleChangePass(event) {
        this.setState({ pass: event.target.value });
    }
    handleChangeConfirmPass(event) {
        this.setState({ confirmpass: event.target.value });
    }
    handleSubmitLogin(event) {
        event.preventDefault();
        console.log(this.state.email, this.state.pass);
        this.submit_login(this.state.email, this.state.pass);
    }
    handleSubmitSignUp(event) {
        event.preventDefault();
        console.log(this.state.email, this.state.pass, this.state.confirmpass);
        this.submit_signup(this.state.email, this.state.pass, this.state.confirmpass);
    }
    submit_login = async (email, pass) => {
        const response = await fetch("http://localhost:3001/auth/", {
            method: 'POST',
            body: JSON.stringify({ "email": email, "pass": pass }),
            headers: { 'Content-Type': 'application/json' }
        });
        const body = await response.json();
        if (response.status !== 200) {
            throw Error(body.message)
        }
        console.log(body);
        return body;
    }
    submit_signup = async (email, pass, confirmpass) => {
        if(pass == confirmpass){
            const response = await fetch("http://localhost:3001/signup/", {
                method: 'POST',
                body: JSON.stringify({ "email": email, "pass": pass }),
                headers: { 'Content-Type': 'application/json' }
            });
            const body = await response.json();
            if (response.status !== 200) {
                throw Error(body.message);
            }
            console.log(body);
            return body;
        }
        else{
            console.log("wrong password");
            return "";
        }
    }
    render() {
        if (this.props.type == true) {
            return (
                <>
                    <form onSubmit={this.handleSubmitLogin}>
                        <label >
                            <input type="text" name="email" value={this.state.email} onChange={this.handleChangeEmail} placeholder="E-mail Adress" />
                        </label>
                        <br />
                        <label>
                            <input type="password" name="pass" value={this.state.pass} onChange={this.handleChangePass} placeholder="Password" />
                        </label>
                        <br />
                        <a href="/"> forget password ?</a>
                        <br />
                        <input type="submit" value="Login" />
                    </form>
                </>
            );
        }
        else {
            return (
                <>
                    <form onSubmit={this.handleSubmitSignUp}>
                        <label >
                            <input type="text" name="email" value={this.state.email} onChange={this.handleChangeEmail} placeholder="E-mail Adress" />
                        </label>
                        <br />
                        <label>
                            <input type="password" name="pass" value={this.state.pass} onChange={this.handleChangePass} placeholder="Password" />
                        </label>
                        <br />
                        <label>
                            <input type="password" name="confirmpass" value={this.state.confirmpass} onChange={this.handleChangeConfirmPass} placeholder="Confirm Password" />
                        </label>
                        <br />
                        <input type="submit" value="SignUp" />
                    </form>
                </>
            );
        }
    }
}
export default LoginForm;