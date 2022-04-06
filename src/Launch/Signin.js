import React from 'react';
import './launch.css';
import './contacts';
import contacts from './contacts';
import { useState } from 'react';   
import { Route, Routes } from 'react-router-dom';



function Signin(props) {

    // if there is an error message - store the name of the field
    const [errorMessages, setErrorMessages] = useState({});

    // indicate if the form is successfully submitted
    const [isSubmitted, setIsSubmitted] = useState(false);

    const errors = { wrong: "Invalid details. Not registerd? Sign up for free now!"};


    const validate = event => {
        // prevent the page from refreshing
        event.preventDefault();

        var { username, password } = document.forms[0];

        // find if the user exists in "contacts" - search by Username
        const userData = contacts.find((user) => user.Username === username.value);

        // Compare user info
        if (userData != null) {
            if (userData.password !== password.value) {
                console.log("wrong pass");
                setErrorMessages({ name: "wrong", message: errors.wrong });
            } else {
                setIsSubmitted(true);
                console.log("You made it !");
            }
        } else {
            // Username not found
            console.log("you dont exist");
            setErrorMessages({ name: "wrong", message: errors.wrong });
        }

    }

    // Generate JSX code for error message
    const renderErrorMessage = (name) =>
        name === errorMessages.name && (
            <div className="error">{errorMessages.message}</div>
        );



    return (
        <div className='sign'>
            <h3 className='signin-text mb-3'>Sign In</h3>
            <div className='signup-signin'>Not registered? <a href="/signup">Click here</a> to sign up!</div>
            {renderErrorMessage("wrong")}
            <form onSubmit={validate}>

                <div className='mb-3 c'>
                    <label className="form-label">Username</label>
                    <input type="text" className="form-control" name="username" required></input>

                </div>

                <br></br>

                <div className='mb-3'>
                    <label className='form-label'>Password</label>
                    <input type="password" className="form-control" name="password" required></input>
                </div>
                
                <br></br>

                <div className='d-grid'>
                    <button type="submit" className='btn btn-class'>Login</button>
                </div>
            </form>
        </div>
    );
}

export default Signin;
