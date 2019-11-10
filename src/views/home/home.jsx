import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import Logo from '../../components/Logo/logo';
import './home.css';


class Home extends Component {
  render() {
    return (
      <div className="home-view">
        <Logo/>
        <nav>
          <Link to="/select" className="start-button">
            START
          </Link>
        </nav>
      </div>
    );
  }

}

export default Home;