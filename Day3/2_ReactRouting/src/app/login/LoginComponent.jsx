import React, { Component } from 'react';
import { Button, FormGroup, FormControl, ControlLabel, HelpBlock } from "react-bootstrap";
import { authenticator } from '../services/auth.service';
import { Redirect } from 'react-router-dom';

class LoginComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            redirectToReferrer: false,
            username: "",
            password: "",
            formErrors: { username: '', password: '' },
            usernameValid: false,
            passwordValid: false,
            formValid: false
        }
        this.handleChange = this.handleChange.bind(this);
        this.validateForm = this.validateForm.bind(this);
        this.login = this.login.bind(this);
    }

    componentDidMount(){
        authenticator.logout();
    }

    validateField(fieldName, value) {
        let fieldValidationErrors = this.state.formErrors;
        let usernameValid = this.state.usernameValid;
        let passwordValid = this.state.passwordValid;

        switch (fieldName) {
            case 'username':
                usernameValid = value.length >= 6;
                fieldValidationErrors.username = usernameValid ? '' : 'Username is invalid';
                break;
            case 'password':
                passwordValid = value.length >= 6;
                fieldValidationErrors.password = passwordValid ? '' : 'Password is too short';
                break;
            default:
                break;
        }
        this.setState({
            formErrors: fieldValidationErrors,
            usernameValid: usernameValid,
            passwordValid: passwordValid
        }, this.validateForm);
    }

    validateForm() {
        this.setState({ formValid: this.state.usernameValid && this.state.passwordValid });
    }

    handleChange(e) {
        const id = e.target.id;
        const value = e.target.value;
        this.setState({ [id]: value },
            () => { this.validateField(id, value) });
    }

    getValidationState(error) {
        return (error.length === 0 ? null : 'error');
    }

    login(e) {
        e.preventDefault();
        authenticator.authenticate(this.state.username, this.state.password, () => {
            this.setState({ redirectToReferrer: authenticator.isAuthenticated });
        });
    }

    render() {
        const { from } = this.props.location.state || { from: { pathname: "/" } };
        const { redirectToReferrer } = this.state;

        if (redirectToReferrer) {
            return <Redirect to={from} />
        }

        return (
            <div>
                <div className="panel panel-danger">
                </div>
                <h1 className="text-info">Login Component</h1>
                <div>
                    <form onSubmit={this.login}>
                        <FormGroup controlId="username" validationState={this.getValidationState(this.state.formErrors.username)}>
                            <ControlLabel>Username</ControlLabel>
                            <FormControl
                                autoFocus
                                type="text"
                                value={this.state.username}
                                onChange={this.handleChange}
                            />
                            <FormControl.Feedback />
                            {this.state.formErrors.username ? <HelpBlock>{this.state.formErrors.username}</HelpBlock> : null}
                        </FormGroup>
                        <FormGroup controlId="password" validationState={this.getValidationState(this.state.formErrors.password)}>
                            <ControlLabel>Password</ControlLabel>
                            <FormControl
                                value={this.state.password}
                                onChange={this.handleChange}
                                type="password"
                            />
                            <FormControl.Feedback />
                            {this.state.formErrors.password ? <HelpBlock>{this.state.formErrors.password}</HelpBlock> : null}
                        </FormGroup>
                        <Button
                            block
                            disabled={!this.state.formValid}
                            type="submit"> Login
                        </Button>
                    </form>
                </div>
            </div>
        );
    }
}

export default LoginComponent;