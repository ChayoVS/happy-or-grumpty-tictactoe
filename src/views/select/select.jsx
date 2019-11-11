import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Happy from '../../components/happy/happy';
import Grumpty from '../../components/grumpty/grumpty';
import Tittle from '../../components/tittle/tittle';
import './select.css';

class Select extends Component {
	handleClick= () => {
		console.log('Se hizo click');
    }

	render() {
		return (
			<div className="select-view">
				<Tittle content="PLAY FIRST:" />
					<figure id="happy-icon" className="figure1" onClick={() => this.handleClick()}>
						<Happy width="100px" height="100px" />
					</figure>
				<Tittle content="PLAY SECOND:" />
					<figure id="grumpty-icon" className="figure1" onClick={this.handleClick} >
						<Grumpty width="100px" height="100px" />
					</figure>
					<br/>
				<nav>
					<Link to="/play" className="play-button">
						PLAY!
					</Link>
					<br />
					<Link to="/" className="home-button"></Link>
				</nav>
			</div>
		);
	}
}

export default Select;
