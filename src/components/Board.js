import "./board.css";
import React from "react";

const Board = ({ board, cellClick, winnerCombination }) => {
  const getCellClass = (index) => {
    if (winnerCombination && winnerCombination.includes(index)) {
      return board[index].toLowerCase() + "-winner"; // "x-winner" lub "o-winner"
    }
    return "";
  };
  return (
    <div className="board">
      {board.map((cell, index) => (
        <div
          key={index}
          className={`cell ${getCellClass(index)}`}
          onClick={() => cellClick(index)}
        >
          {cell}
        </div>
      ))}
    </div>
  );
};

export default Board;
