import {Link} from "react-router-dom";

const About = ({toolName})=>{
    return (
        <div className="about">
            <h1>About</h1>
            <p>Simple app to test GUI basic with {toolName}</p>

            <p>
                <Link className='link' to='/'>Home</Link>
            </p>
        </div>
    )
}

export default About;