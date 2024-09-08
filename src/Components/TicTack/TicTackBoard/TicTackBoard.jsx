import React from "react";
import calcWiner from "../../CalcWiner";
import Square from "../Square/Square";
import classes from "./TicTackBoard.module.scss";
const TicTackBoard = ({ xIsNext, squares, onPlay, historyLenghts, currentMove, isSingleGame }) => {
  function handleClick(i) {
    if (squares[i] || calcWiner(squares)) {
      return;
    }
    const nextSquares = squares.slice();
    if (xIsNext) {
      nextSquares[i] = "X";
    } else {
      nextSquares[i] = "O";
    }
    onPlay(nextSquares);
  }

  const winnerInfo = calcWiner(squares);
  const winner = winnerInfo?.winner;
  const winningLine = winnerInfo?.line || [];

  let gameStatus;
  let draw = historyLenghts === 10 && currentMove === 9;
  
  
  let lastWinner = winner && currentMove === 9;
  
  if (isSingleGame && !draw) {
    gameStatus = "Go one, let's find out who will win!";
  }
  if (winner) {
    gameStatus = "Winner is " + winner;
  }
  if (!winner && !isSingleGame) {
    gameStatus = "Next player: " + (xIsNext ? "X" : "O");
  }
  if (draw) {
    gameStatus = "Draw";
  }
  if (lastWinner) {
    gameStatus = "Winner is " + winner;
  }

  return (
    <div className={classes.wrapper}>
      <div className={classes.status}>{gameStatus}</div>
      <div className={classes.squares_container}>
        <div>
          <Square
            value={squares[0]}
            squareChangeFunk={() => handleClick(0)}
            isWinningSquare={winningLine.includes(0)}
          />
          <Square
            value={squares[1]}
            squareChangeFunk={() => handleClick(1)}
            isWinningSquare={winningLine.includes(1)}
          />
          <Square
            value={squares[2]}
            squareChangeFunk={() => handleClick(2)}
            isWinningSquare={winningLine.includes(2)}
          />
        </div>
        <div>
          <Square
            value={squares[3]}
            squareChangeFunk={() => handleClick(3)}
            isWinningSquare={winningLine.includes(3)}
          />
          <Square
            value={squares[4]}
            squareChangeFunk={() => handleClick(4)}
            isWinningSquare={winningLine.includes(4)}
          />
          <Square
            value={squares[5]}
            squareChangeFunk={() => handleClick(5)}
            isWinningSquare={winningLine.includes(5)}
          />
        </div>
        <div>
          <Square
            value={squares[6]}
            squareChangeFunk={() => handleClick(6)}
            isWinningSquare={winningLine.includes(6)}
          />
          <Square
            value={squares[7]}
            squareChangeFunk={() => handleClick(7)}
            isWinningSquare={winningLine.includes(7)}
          />
          <Square
            value={squares[8]}
            squareChangeFunk={() => handleClick(8)}
            isWinningSquare={winningLine.includes(8)}
          />
        </div>
      </div>
    </div>
  );
};

export default TicTackBoard;
