import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import Happy from '../../components/happy/happy';
import Grumpty from '../../components/grumpty/grumpty';
import Tittle from '../../components/tittle/tittle';
import './select.css';

class Select extends Component {
    render () {
        return (
            <div className="select-view">
                <Tittle content="PLAY FIRST:"/>
                <br/>
                <br/>
                <br/>
                <article className="cat-icons">
                    <figure><Happy width="120px" height= "120px"/></figure>
                    <figure><Grumpty width="120px" height= "120px"/></figure>
                </article>
                <br/>
            <nav>
                <Link to="/game" className="play-button">
                    PLAY!
                </Link>
                <br/>
                <Link to="/" className="home-button">
                </Link>
            </nav>
            </div>
        )
    }
}

export default Select;