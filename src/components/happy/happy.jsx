import React, {Component} from 'react';
import './happy.css';

class Happy extends Component {
    render () {
        const styles = {
            width: this.props.width,
            height: this.props.height
        }
        return (
            <input type="button" 
            className="icon-button2" 
            style={styles}>
            </input>
        )
    }
}

export default Happy;