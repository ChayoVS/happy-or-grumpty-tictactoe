import React, {Component} from 'react';
import './App.css'
import Home from './views/home/home';
import Select from './views/select/select'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Play from './views/play/play';

class App extends Component {
    
    render() {
               return (
            <Router basename={window.location.pathname || ''} >
                <Switch >
                    <Route exact path="/" render={props => <Home/>}></Route>
                    <Route exact path="/select" render={props => <Select/>}></Route>
                    <Route exact path="/play" render={props => <Play/>}></Route>
                </Switch>
            </Router>
        )
    }
}

export default App;