import React from 'react'
import './square.css'

export default function Square({ value, squareChangeFunk }) {
  return (
    <button className={`square button-55 ${value ? 'filled' : ''}`} onClick={squareChangeFunk}>
      {value && <span className={`symbol ${value === 'X' ? 'cross' : 'circle'}`}>{value}</span>}
    </button>
  )
}
