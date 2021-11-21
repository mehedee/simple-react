import {Link} from "react-router-dom";

const Login = () =>{
    return (
        <div className="login">
            <div className="login__container">
                <h1>Sign-in</h1>
                <form>
                    <h5>E-mail</h5>
                    <input type="text" name="email" />
                    <h5>Password</h5>
                    <input type="password" name="password" />
                    <button type="submit">Sign in</button>
                    <p>
                        By signing-in you agree to the
                        <span>Terms and Conditions</span>
                    </p>
                    <button type="submit">Sign up</button>
                </form>
            </div>

            <div className='options'>
                <Link className='link' exact to="/register">Signup</Link>
                <Link className='link' exact to="/">Home</Link>
            </div>

        </div>
    );
}

export default Login;