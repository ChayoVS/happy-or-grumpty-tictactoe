import React, {Component} from 'react';
import './tittle.css';

class Tittle extends Component {
    render (){
        return (
            <h3 className="tittleAll">{this.props.content}</h3>
        )
    }
}

export default Tittle