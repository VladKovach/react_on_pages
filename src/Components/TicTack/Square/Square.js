import React from "react";
import "./square.scss";

export default function Square({ value, squareChangeFunk, isWinningSquare }) {
  return (
    <button
      className={`square button-55 ${value ? "filled" : ""} ${
        isWinningSquare ? "winning-square" : ""
      }`}
      onClick={squareChangeFunk}
    >
      {value && <span className={`symbol ${value === "X" ? "cross" : "circle"}`}>{value}</span>}
    </button>
  );
}
