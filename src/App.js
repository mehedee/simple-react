import './App.css';
import Landing from "./components/Landing";
import About from "./components/About";
import {BrowserRouter as Router, Route} from "react-router-dom";
import Login from "./components/Login";
import Register from "./components/Register";

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
                </header>
            </div>
        </Router>
    );
}

export default App;
