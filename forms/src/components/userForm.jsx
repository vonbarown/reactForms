import React from "react";

class UserInfoForm extends React.Component {
    constructor() {
        super();
        this.initialState = {
            usernameValue: "someone",
            userPassword: "passcode",
            submitted: false
        };
        this.state = this.initialState;
    }

    handleSubmitted = event => {
        event.preventDefault();
        this.setState({
            submitted: true
        });
    };

    userChange = event => {
        console.log("username changed", event.target.value);
        this.setState({
            usernameValue: event.target.value
        });
    };

    userPassChange = event => {
        console.log("username changed", event.target.value);
        this.setState({
            userPassword: event.target.value
        });
    };

    resetForm = event => {
        event.preventDefault();
        this.setState(this.initialState);
    };

    render() {
        console.log(this.state);

        const { usernameValue, userPassword, submitted } = this.state;
        if (submitted) {
            return (
                <div>
                    <h1>Welcome {usernameValue}</h1>
                </div>
            );
        } else {
            return (
                <form onSubmit={this.handleSubmitted}>
                    <h2>User Information</h2>
                    <input
                        type="text"
                        placeholder="username"
                        value={usernameValue}
                        onChange={this.userChange}
                    />
                    <input
                        type="password"
                        placeholder="password"
                        value={userPassword}
                        onChange={this.userPassChange}
                    />
                    <button>Submit</button>
                    <button onClick={this.resetForm}>Reset</button>
                </form>
            );
        }
    }

    handleFormSubmit = event => {
        event.preventDefault();
        alert("Form submitted!");
    };
}

export default UserInfoForm;
