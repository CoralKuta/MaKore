import './launch.css';


function Signup() {
    return (

        <div className='sign'>
            <h3 class="signup-text mb-3">Sign Up</h3>
            <div className='signup-signin'>Already registered? Click here to login!</div>

            <form>
                <div class="row">
                    <div class="mb-3 col">
                        <label for="Username" class="form-label">Username</label>
                        <input type="text" class="form-control" id="username"></input>
                    </div>

                    <div class="mb-3 col">
                        <label for="Nickname" class="form-label">Nickname</label>
                        <input type="text" class="form-control" id="nickname"></input>
                    </div>
                </div>

                <div class="row">
                    <div class="mb-3 col">
                        <label for="password" class="form-label">Password</label>
                        <input type="password" class="form-control" id="pass"></input>
                    </div>


                    <div class="mb-3 col">
                        <label for="password" class="form-label">Confirm Password</label>
                        <input type="password" class="form-control" id="passagain"></input>
                    </div>
                </div>

                <div class="mb-3">
                    <label for="image" class="form-label">Picture</label>
                    <input class="form-control" accept="image/png, image/gif, image/jpeg" type="file" id="formFile"></input>
                </div>

                <div class="d-grid gap-2">
                    <button class="btn btn-class">Sign Up</button>
                </div>
            </form>
        </div>
    );
}

export default Signup;

