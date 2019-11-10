import React, {Component} from 'react';
import './App.css'
import Home from './views/home/home';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

class App extends Component {
    
    render() {
               return (
            <Router basename={window.location.pathname || ''} >
                <Switch >
                    <Route exact path="/" render={props => <Home/>}></Route>
                    <Route exact path="/select"></Route>
                    <Route exact path="/game"></Route>
                </Switch>
            </Router>
        )
    }
}

export default App;