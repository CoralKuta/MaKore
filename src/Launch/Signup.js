import React from 'react';
import './launch.css';
import './contacts';
import contacts from './contacts';
import { useState } from 'react';   
import { Route, Routes } from 'react-router-dom';

function Signup() {


    // if there is an error message - store the name of the field
    const [errorMessages, setErrorMessages] = useState({});

    // indicate if the form is successfully submitted
    const [isSubmitted, setIsSubmitted] = useState(false);

    const errors = { usernameTaken: "Username already taken!", wrongPassword2: "Passwords are not the same"};


    
    const register = event => {
        // prevent the page from refreshing
        event.preventDefault();

        var { username, nickname, password1, password2, pic } = document.forms[0];

        // find if the userbame already exists in "contacts"
        const userData = contacts.find((user) => user.Username === username.value);

        // if there is a user with this user name
        if (userData) {
            if (userData.Username !== null) {
                console.log("user name taken");
                setErrorMessages({ name: "usernameTaken", message: errors.usernameTaken });
            }
            // new user
        } else {
            // validate same passwords
            if (password1.value !== password2.value) {
                console.log("not the same pass");
                setErrorMessages({ name: "wrongPassword2", message: errors.wrongPassword2 });
            } else {
                var Username = username.value;
                var password = password1.value;

                var Nickname;
                if (nickname.value) {
                    Nickname = nickname.value;
                } else {
                    Nickname = username.value;
                }

                var pic;
                if (pic.value) {
                    pic = pic.value;
                } else {
                    pic = null;
                }

                contacts[contacts.length] = {Username, Nickname, password, pic};
            }
        }

        console.log(contacts);
    }

        // Generate JSX code for error message
        const renderErrorMessage = (name) =>
        name === errorMessages.name && (
            <div className="error">{errorMessages.message}</div>
        );


    return (

        <div className='sign'>
            <h3 className="signup-text mb-3">Sign Up</h3>
            <div className='signup-signin'>Already registered? <a href="/signin">Click here</a> to login!</div>

            <form onSubmit={register}>
                <div className="row">
                    <div className="mb-3 col">
                        <label className="form-label">Username</label>
                        <input type="text" className="form-control" name="username" required></input>
                        {renderErrorMessage("usernameTaken")}
                    </div>

                    <div className="mb-3 col">
                        <label className="form-label">Nickname</label>
                        <input type="text" className="form-control" name="nickname"></input>
                    </div>
                </div>

                <div className="row">
                    <div className="mb-3 col">
                        <label className="form-label">Password</label>
                        <input type="password" className="form-control" name="password1" required></input>
                        {renderErrorMessage("wrongPassword2")}
                    </div>


                    <div className="mb-3 col">
                        <label className="form-label">Confirm Password</label>
                        <input type="password" className="form-control" name="password2" required></input>
                    </div>
                </div>

                <div className="mb-3">
                    <label className="form-label">Picture</label>
                    <input className="form-control" accept="image/png, image/gif, image/jpeg" type="file" name="pic"></input>
                </div>

                <div className="d-grid gap-2">
                    <button className="btn btn-class">Sign Up</button>
                </div>
            </form>
        </div>
    );
}

export default Signup;

