import React, { useState } from 'react';
import Square from '../square/square'
import {WinningLogic} from '../board/board'
import Happy from '../../happy/happy'
import Grumpty from '../../grumpty/grumpty'
import './game.css'


function Game() {
    const [squares, setSquare] = useState(Array(9).fill(null));
    const [isXNext, setXNext] = useState(true);
  
    const winningInfo = WinningLogic(squares);
    const winner = winningInfo.winner;

    let happyCat = <Happy width= "80px" height = "80px"/>;
    let grumptyCat = <Grumpty width= "80px" height = "80px"/>;

  
    const winnerHighlight = winningInfo.line;
    let status;
    if (winner) {
      status ="WIN! " + winner;
    } else if (winningInfo.isDraw) {
      status = "DRAW";
    } else {
    status = <span>Next Player is: {isXNext ? <Happy width= "40px" height = "40px"/> : <Grumpty width= "40px" height = "40px"/>}</span>
    } 

    function renderSquare(i) {
      return (
        <Square
          onClick={() => {
              if (squares[i] != null || winner != null){
                  return;
              }
            const nextSquare = squares.slice();
            nextSquare[i] = isXNext ?  'X' : 'O';
            setXNext(!isXNext);
            setSquare(nextSquare);
          }}
          value={squares[i]}
          highlightWinner={winnerHighlight && winnerHighlight.includes(i)}
        />
      );
    }
    return (
      <div className= "all-board">
          <br/>
          <br/>
        <div className="status">{status}</div>
        <br/>
        <br/>
        <div className="board-row">
          {renderSquare(0)}
          {renderSquare(1)}
          {renderSquare(2)}
        </div>
  
        <div className="board-row">
          {renderSquare(3)}
          {renderSquare(4)}
          {renderSquare(5)}
        </div>
  
        <div className="board-row">
          {renderSquare(6)}
          {renderSquare(7)}
          {renderSquare(8)}
        </div>
        <br/>
        <figure className= "exit-icons">
        </figure>
        
      </div>
    );
}

  export default Game;
  
  