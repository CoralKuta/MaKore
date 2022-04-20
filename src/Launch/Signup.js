import React from 'react';
import './launch.css';
import '../users';
import users from '../users';
import { useState } from 'react';
import { useNavigate, Link } from "react-router-dom";
import New from './MKTRAN.png'
import Talking from './talking1.png'
import MK from './footer.png'
import deafultImg from './avatar.png'

function Signup() {

    const navigate = useNavigate();

    // if there is an error message - store the name of the field
    const [errorMessages, setErrorMessages] = useState({});

    // indicate if the form is successfully submitted
    const [isSubmitted, setIsSubmitted] = useState(false);

    // to hide the error messages
    const [displayError, setdisplayError] = useState('none');

    const errors = {
        usernameTaken: "Username already taken", wrongPassword2: "Passwords are not the same",
        emptyName: "Username must contain at least one character",
        invalidPass: "Password must contain at least eight characters, including digits and letters"
    };


    // When an error is displayed and the client tries again, he clicks on the form, and thus we want the errors to disapear.
    const hideErrors = () => {
        setdisplayError('none');
    }

    const register = event => {
        // prevent the page from refreshing
        event.preventDefault();

        var { username, nickname, password1, password2, pic } = document.forms[0];
        var newUsername = username.value.trim();

        // find if the userbame already exists in "users"
        const userData = users.find((user) => user.Username === newUsername);

        // if there is a user with this user name
        if (userData) {
            if (userData.Username !== null) {
                setErrorMessages({ name: "usernameTaken", message: errors.usernameTaken });
                setdisplayError('block');
            }

            // new user
        } else {
            // validate username not empty, and contains letters and digits only
            var regex = /^[A-Za-z0-9]*$/;
            var passRegex = /^(?=.*[a-zA-Z])(?=.*[0-9])/;

            // remove empty spaces from beginning and end
            var newUsername = username.value.trim();
            var newPass1 = password1.value.trim();
            var newPass2 = password2.value.trim();

            if ((!regex.test(newUsername)) || (newUsername === '')) {
                setErrorMessages({ name: "emptyName", message: errors.emptyName });
                setdisplayError('block');

                // validate characters of password
            } else if ((!passRegex.test(newPass1)) || (newPass1.length < 8)) {
                setErrorMessages({ name: "invalidPass", message: errors.invalidPass });
                setdisplayError('block');
            }

            // validate same passwords
            else if (newPass1 !== newPass2) {
                setErrorMessages({ name: "wrongPassword2", message: errors.wrongPassword2 });
                setdisplayError('block');

                // new user, all good
            } else {
                var Username = newUsername;
                var password = newPass1;

                var Nickname;
                if (nickname.value) {
                    Nickname = nickname.value;
                } else {
                    Nickname = newUsername;
                }

                var pic;
                if (pic.value) {
                    pic = pic.value;
                } else {
                    pic = deafultImg;
                }

                var friends = [];
                var noti = 0;
                users[users.length] = { Username, Nickname, password, pic, friends, noti };
                setIsSubmitted(true);
                navigate('../chats', { state: { data: users[users.length - 1] } });
            }
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
                <h3 className="signup-text">Sign Up</h3>
                <div className='signup-signin'>Already registered? <Link to="/">Click here</Link> to login</div>


                <form onSubmit={register}>
                    <div className="row">
                        <div className="mb-3 col">
                            <label className="form-label">Username</label>
                            <input type="text" className="form-control" name="username" required></input>
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
                        </div>


                        <div className="mb-3 col">
                            <label className="form-label">Confirm Password</label>
                            <input type="password" className="form-control" name="password2" required></input>
                        </div>
                    </div>

                    <div className='row'>
                        <div className="mb-3 pic">
                            <label className="form-label">Picture</label>
                            <input className="form-control" id='picture' accept="image/*" type="file" name="pic"></input>
                        </div>
                    </div>

                    <div className="d-grid gap-2">
                        <button className="btn btn-class">Sign Up</button>
                    </div>
                    <div className='row'>
                        <div style={{ 'display': displayError }}>
                            {renderErrorMessage("usernameTaken")}
                            {renderErrorMessage("emptyName")}
                            {renderErrorMessage("wrongPassword2")}
                            {renderErrorMessage("invalidPass")}
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

export default Signup;

