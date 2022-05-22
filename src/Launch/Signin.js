import React from 'react';
import './launch.css';
import { useState } from 'react';
import { useNavigate, Link, useParams } from "react-router-dom";
import New from '../images/MKTRAN.png'
import Talking from '../images/talking1.png'
import MK from '../images/footer.png'
import consts from '../consts.js';




function Signin() {
    const navigate = useNavigate();
    

    // if there is an error message - store the name of the field
    const [errorMessages, setErrorMessages] = useState({});

    // indicate if the form is successfully submitted
    const [isSubmitted, setIsSubmitted] = useState(false);

    const errors = { wrong: "Invalid details. Not registerd? Sign up now!"};
    const servererrors = { wrong: "Internal server error"};

    

    // to hide the error messages
    const [displayError, setdisplayError] = useState('none');



    // When an error is displayed and the client tries again, he clicks on the form, and thus we want the errors to disapear.
    const hideErrors = () => {
        setdisplayError('none');
    }


    const validate = async (event) => {
        // prevent the page from refreshing
        event.preventDefault();

        var { username, password } = document.forms[0];
        // get JWT from server
        const requestOptions = {
            method: 'Post',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ UserName: username.value, Password: password.value })
        };
        const token = await fetch('http://' + consts.myServer + '/api/connection/login', requestOptions)
            .then(response=> {
                if (response.status == 200) {
                    return response.text();
                } else {
                    return response.status;
                }
            })
            .then(data=> {
                return data;
            })
            .catch(error => {
                console.log('Request failed', error);
        });
        if (token != 400 && token != undefined) {
            setIsSubmitted(true);
            sessionStorage.setItem('myTokenName', token);
            // read from storage
            navigate('../chats', { state: { data: username.value } });
        } else if (token == 400) {
            setErrorMessages({ name: "wrong", message: errors.wrong });
            setdisplayError('block');
        } else {
            setErrorMessages({ name: "wrong", message: servererrors.wrong });
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