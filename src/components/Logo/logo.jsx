import React, {Component} from 'react';
import logo from '../../img/logo.png';
import './logo.css';

class Logo extends Component{
    render(){
      return (
        <figure>
            <img src={logo} alt="Happy or Grumpty" className="logo-gh"/>
        </figure>
          )  
    }
};

export default Logo;