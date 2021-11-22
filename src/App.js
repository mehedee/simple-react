import './App.css';
import Landing from "./components/Landing";
import About from "./components/About";
import {BrowserRouter as Router, Route} from "react-router-dom";
import Login from "./components/Login";
import Register from "./components/Register";
import Counter from "./components/Counter";

function App() {
    const toolName = 'Jest'
    return (
        <Router>
            <div className="App">
                <header className="App-header">
                    <Route exact path='/' render={() => <Landing toolName={toolName}/>}/>
                    <Route exact path='/about' render={() => <About toolName={toolName}/>}/>
                    <Route exact path='/login' render={() => <Login />}/>
                    <Route exact path='/register' render={() => <Register />}/>
                    <Route exact path='/counter' render={() => <Counter />}/>
                </header>
            </div>
        </Router>
    );
}

export default App;
