import {useState} from "react";
import {Link} from "react-router-dom";

const Counter = () => {
    const [count, setCount] = useState(1);
    const increment = () => {
        setCount(count + 1);
    }
    const decrement = ()=>{
        if(count === 0){
            return
        }
        setCount(count - 1);
    }
    return (
        <div id='counterContainer'>
            <h1>Counter</h1>

            <p>Current count: <strong>{count}</strong></p>

            <button className='link' onClick={increment}>+</button>
            <button className='link' onClick={decrement}>-</button>

            <div className="options">
                <Link className="link"  to='/'>Back to home</Link>
            </div>

        </div>
    );
}

export default Counter;