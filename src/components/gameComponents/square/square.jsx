import React from 'react'
import Happy from '../../happy/happy'
import Grumpty from '../../grumpty/grumpty'


function Square({ onClick, value, highlightWinner }) {
  const className = "square" + (highlightWinner ? "highlight" : "");
  const squareComponents = () => {
    if("square" === 'X') {
     
    }

  }
  return (
    <button className={className} onClick={onClick}>
      {value}
    </button>
  );
}

export default Square;






