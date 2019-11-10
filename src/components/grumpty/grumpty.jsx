import React, {Component} from 'react';
import './grumpty.css';

class Grumpty extends Component {
    render () {
        const styles = {
            width: this.props.width,
            height: this.props.height
        }
        return (
            <input type="button" className="icon-button" style={styles}></input>
        )
    }
}

export default Grumpty;