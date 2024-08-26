import React from 'react'

const Square = ({ value, squareChangeFunk }) => {
  return (
    <button className="square button-55 " onClick={() => squareChangeFunk()}>
      {value}
    </button>
  )
}

export default Square
