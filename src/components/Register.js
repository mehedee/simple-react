import {Link} from "react-router-dom";

const Register = () => {
    return (
        <div className="register">
            <div className="registerForm">
                <h1>Register</h1>
                <form>
                    <div className="form-group">
                        <label htmlFor="username">Username</label>
                        <input type="text" className="form-control" id="username" placeholder="Enter username"/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="password">Password</label>
                        <input type="password" className="form-control" id="password" placeholder="Enter password"/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="confirmPassword">Confirm Password</label>
                        <input type="password" className="form-control" id="confirmPassword"
                               placeholder="Confirm password"/>
                    </div>
                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>
            </div>

            <div className="options">
                <Link className='link' exact to="/login">Login</Link>
                <Link className='link' exact to="/">Home</Link>
            </div>
        </div>

    );
}

export default Register;