import React from 'react';
import './launch.css';
import '../users';
import users from '../users';
import { useState } from 'react';
import { useNavigate, Link, useParams } from "react-router-dom";
import New from '../images/MKTRAN.png'
import Talking from '../images/talking1.png'
import MK from '../images/footer.png'



function Signin() {
    const navigate = useNavigate();


    // if there is an error message - store the name of the field
    const [errorMessages, setErrorMessages] = useState({});

    // indicate if the form is successfully submitted
    const [isSubmitted, setIsSubmitted] = useState(false);

    const errors = { wrong: "Invalid details. Not registerd? Sign up now!" };

    // to hide the error messages
    const [displayError, setdisplayError] = useState('none');



    // When an error is displayed and the client tries again, he clicks on the form, and thus we want the errors to disapear.
    const hideErrors = () => {
        setdisplayError('none');
    }


    const validate = event => {
        // prevent the page from refreshing
        event.preventDefault();

        var { username, password } = document.forms[0];

        // find if the user exists in "users" - search by Username
       let userData = users.find((user) => user.Username === username.value);



        // Compare user info
        if (userData != null) {
            if (userData.password !== password.value) {
                setErrorMessages({ name: "wrong", message: errors.wrong });
                setdisplayError('block');
            } else {
                setIsSubmitted(true);
                navigate('../chats', { state: { data: userData } });
            }
        } else {
            setErrorMessages({ name: "wrong", message: errors.wrong });
            setdisplayError('block');
        }
    }





    // Generate JSX code for error message
    const renderErrorMessage = (name) =>
        name === errorMessages.name && (
            <div className="errors">{errorMessages.message}</div>
        );



    return (

        

        <div className='wrapper'>
            <div className="logo-space"><img className='logo' src={New}></img></div>
            <div className='sign' onClick={hideErrors}>
                <h3 className='signin-text'>Sign In</h3>
                <div className='signup-signin'>Not registered? <Link to="/signup">Click here</Link> to sign up!</div>
                <form onSubmit={validate}>

                    <div className='row'>
                        <div className='mb-3 c'>
                            <label className="form-label">Username</label>
                            <input type="text" className="form-control" name="username" required></input>
                        </div>
                    </div>
                    <br></br>
                    <div className='row'>
                        <div className='mb-3'>
                            <label className='form-label'>Password</label>
                            <input type="password" className="form-control" name="password" required></input>
                        </div>
                    </div>
                    <br></br>
                    <div className='d-grid'>
                        <button type="submit" className='btn btn-class'>Login</button>
                    </div>
                    <div className='row'>
                        <div style={{ 'display': displayError }}>
                            {renderErrorMessage("wrong")}
                        </div>
                    </div>
                </form>
            </div>
            <div className='menu'>
                <img className='side' src={Talking}></img>
                <img className='footer' src={MK}></img>
            </div>
        </div>
    );
}

export default Signin;

