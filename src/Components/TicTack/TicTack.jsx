import React, { useState, useEffect } from "react";
import TicTackBoard from "./TicTackBoard/TicTackBoard";
import classes from "./TicTack.module.scss";
import calcWiner from "../CalcWiner";

export default function TicTack() {
  const [history, setHistory] = useState([Array(9).fill(null)]);
  const [currentMove, setCurrentMove] = useState(0);
  const [isSingleGame, setIsSingleGame] = useState(null);
  let currentSquares = history[currentMove];
  let xIsNext = currentMove % 2 === 0;

  // AI Move
  useEffect(() => {
    let draw = history.length === 10 && currentMove === 9;

    if (isSingleGame && !xIsNext && !calcWiner(currentSquares) && !draw) {
      const nextSquares = makeAIMove(currentSquares);
      handlePlay(nextSquares);
    }
  }, [currentMove, isSingleGame, xIsNext]);

  function handlePlay(nextSquares) {
    const nextHistory = [...history.slice(0, currentMove + 1), nextSquares];
    setHistory(nextHistory);
    setCurrentMove(nextHistory.length - 1);
  }

  function jumpTo(moveId) {
    setCurrentMove(moveId);
  }

  const handleGameTypeClick = (type) => {
    if (type === "alone") {
      setIsSingleGame(true);
    } else {
      setIsSingleGame(false);
    }
    setCurrentMove(0);
  };

  const movesList = history.map((squares, move) => {
    let description = "Go to move # ";
    if (move > 0) {
      description += move;
    } else {
      description = "Go to Game Start";
    }
    return (
      <li key={move}>
        <button className="button-30" onClick={() => jumpTo(move)}>
          {description}
        </button>
      </li>
    );
  });

  return (
    <div className={classes.game_wrapper}>
      <div className={classes.game_variant}>
        <p className={classes.text}>Choose how you want to play:</p>
        <button
          className={`${classes.how_to_play_btn} button-30`}
          onClick={() => handleGameTypeClick("alone")}
        >
          Alone
        </button>
        <button
          className={`${classes.how_to_play_btn} button-30`}
          onClick={() => handleGameTypeClick("someone")}
        >
          With someone
        </button>
      </div>
      <div className={classes.game}>
        <TicTackBoard
          xIsNext={xIsNext}
          squares={currentSquares}
          onPlay={handlePlay}
          historyLenghts={history.length}
          currentMove={currentMove}
          isSingleGame={isSingleGame}
        />
        <div className={classes.game_info}>
          <ol>{movesList}</ol>
        </div>
      </div>
    </div>
  );
}

// Function to calculate a random AI move (simple AI)
function makeAIMove(squares) {
  const emptySquares = squares
    .map((sq, index) => (sq === null ? index : null))
    .filter((val) => val !== null);
  if (emptySquares.length === 0) return squares;

  // Choose a random empty square for now
  const randomIndex = emptySquares[Math.floor(Math.random() * emptySquares.length)];
  const newSquares = squares.slice();
  newSquares[randomIndex] = "O";
  return newSquares;
}
