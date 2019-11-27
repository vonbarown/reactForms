import React from "react";

class UserInfoForm extends React.Component {
    constructor() {
        super();
        this.initialState = {
            usernameValue: "",
            userPassword: "",
            submitted: false,
            notARobot: false,
            title: ''
        };
        this.state = this.initialState;
    }

    allFieldsValid = () => {
        return (
            this.state.notARobot &&
            this.state.title &&
            this.state.usernameValue &&
            this.state.userPassword
        );
    };
    handleSubmitted = event => {
        event.preventDefault();
        if (this.allFieldsValid()) {
            console.log("help", this.state);

            this.setState({
                submitted: true
            });
        }
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

    handleCheckBox = (event) => {
        // console.log(this.state);
        console.log(('Checked', event.target.checked));
        this.setState({
            notARobot: event.target.checked
        })
    }

    handleSelectChange = (event) => {
        this.setState({
            title: event.target.value
        })
    }

    render() {
        console.log(this.state);

        const { usernameValue, userPassword, submitted, notARobot, title } = this.state;
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
                    <label htmlFor="title">Title:
                        <select id="title" onChange={this.handleSelectChange} value={title}>
                            <option value=''></option>
                            <option value='mr'>Mr.</option>
                            <option value='ms'>Ms.</option>
                            <option value='mrs'>Mrs.</option>
                            <option value='mx'>Mx.</option>
                            <option value='dr'>Dr.</option>
                        </select>
                    </label>
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
                    <label htmlFor="not-robot">not a Robot
                        <input
                            id="not-robot"
                            type="checkbox"
                            onChange={this.handleCheckBox}
                            checked={notARobot}
                        />
                    </label>
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
