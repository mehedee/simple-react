import {Link} from "react-router-dom";

const Landing = ({toolName}) => {
    return (
        <div className="landing">
            <div className="landing-header">
                <h1>React Testing with {toolName}</h1>
            </div>

            <div className="options">
                <Link className='link' to="/login">Login</Link>
                <Link className='link' to="/register">Register</Link>
                <Link className='link' to="/about">About</Link>
            </div>

            {/*<Route path="/about" component={About}/>*/}
            {/*<Route path="/login" component={Login}/>*/}
            {/*<Route path="/register" component={Register}/>*/}
        </div>
    );
}

Landing.defaultProps = {
    'toolName': 'Jest'
}


export default Landing;