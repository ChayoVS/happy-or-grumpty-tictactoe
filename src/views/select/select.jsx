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
				<br />
				<br />
				<article className="cat-icons">
					<figure id="happy-icon" className="figure1" onClick={() => this.handleClick()}>
						<Happy width="125px" height="125px" />
					</figure>
					<figure id="grumpty-icon" className="figure1" onClick={this.handleClick} >
						<Grumpty width="125px" height="125px" />
					</figure>
				</article>
                <br />
				<br />
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
