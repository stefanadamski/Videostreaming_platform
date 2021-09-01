import React from "react";
import Home from "./Home";
import StartPage from "./components/StartPage/startPage.jsx";
import {
    BrowserRouter as Router,
    Route,
    Switch,
} from 'react-router-dom';

const App = () => {
    return (
        <Router>
            <Switch>
                <Route exact path="/" component={StartPage}/>
                <Route exact path="/home" component={Home}/>
                <Route exact path="/service" component={StartPage}/>
                <Route exact path="/subscription" component={StartPage}/>
            </Switch>
        </Router>
    );
}

export default App;