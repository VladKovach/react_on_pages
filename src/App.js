import React, { useState } from 'react'
import calcWiner from './Components/CalcWiner'
import Square from './Components/Square'

const Game = ({ xIsNext, squares, onPlay, historyLenghts, currentMove }) => {
  function handleClick(i) {
    if (squares[i] || calcWiner(squares)) {
      return
    }
    const nextSquares = squares.slice()
    if (xIsNext) {
      nextSquares[i] = 'X'
    } else {
      nextSquares[i] = 'O'
    }
    onPlay(nextSquares)
  }
  const winer = calcWiner(squares)
  let gameStatus
  let draw = historyLenghts === 10 && currentMove === 9
  let lastWiner = winer && currentMove === 9
  if (winer) {
    gameStatus = 'Winner is ' + winer
  }
  if (!winer) {
    gameStatus = 'Next platyer : ' + (xIsNext ? 'X' : 'O')
  }
  if (draw) {
    gameStatus = 'Draw'
  }
  if (lastWiner) {
    gameStatus = 'Winner is ' + winer
  }
  console.log(currentMove)

  return (
    <div>
      <div className="status">{gameStatus}</div>
      <div className="board-row">
        <Square value={squares[0]} squareChangeFunk={() => handleClick(0)} />
        <Square value={squares[1]} squareChangeFunk={() => handleClick(1)} />
        <Square value={squares[2]} squareChangeFunk={() => handleClick(2)} />
      </div>
      <div className="board-row">
        <Square value={squares[3]} squareChangeFunk={() => handleClick(3)} />
        <Square value={squares[4]} squareChangeFunk={() => handleClick(4)} />
        <Square value={squares[5]} squareChangeFunk={() => handleClick(5)} />
      </div>
      <div className="board-row">
        <Square value={squares[6]} squareChangeFunk={() => handleClick(6)} />
        <Square value={squares[7]} squareChangeFunk={() => handleClick(7)} />
        <Square value={squares[8]} squareChangeFunk={() => handleClick(8)} />
      </div>
    </div>
  )
}
export default function App() {
  const [history, setHistory] = useState([Array(9).fill(null)])
  const [currentMove, setCurrentMove] = useState(0)
  let currentSquares = history[currentMove]
  let xIsNext = currentMove % 2 === 0

  function handlePlay(nextSquares) {
    const nextHistory = [...history.slice(0, currentMove + 1), nextSquares]
    setHistory(nextHistory)
    setCurrentMove(nextHistory.length - 1)
  }
  function jumpTo(moveId) {
    setCurrentMove(moveId)
  }
  const movesList = history.map((squares, move) => {
    let description = 'Go to move # '
    if (move > 0) {
      description += move
    } else {
      description = 'Go to Game Srart'
    }
    return (
      <li key={move}>
        <button className="button-30" onClick={() => jumpTo(move)}>
          {description}
        </button>
      </li>
    )
  })
  return (
    <div className="game">
      <div className="game-board">
        <Game
          xIsNext={xIsNext}
          squares={currentSquares}
          onPlay={handlePlay}
          historyLenghts={history.length}
          currentMove={currentMove}
        />
      </div>
      <div className="game-info">
        <ol>{movesList}</ol>
      </div>
    </div>
  )
}
