import './launch.css';


function Signin() {



    return (
        <div className='sign'>
            <h3 class="signin-text mb-3">Sign In</h3>
            <div className='signup-signin'>Not registered? Click here to sign up!</div>
            <form>

                <div class="mb-3">
                    <label for="Username" class="form-label">Username</label>
                    <input type="text" class="form-control" id="username"></input>
                </div>


                <div class="mb-3">
                    <label for="password" class="form-label">Password</label>
                    <input type="password" class="form-control" id="pass"></input>
                </div>

                <div class="d-grid gap-2">
                    <button class="btn btn-class">Login</button>
                </div>
            </form>
        </div>
    );
}

export default Signin;

