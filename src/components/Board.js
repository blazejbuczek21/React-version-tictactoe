import "./board.css";
import React from "react";

const Board = ({ board, cellClick, winnerCombination }) => {
  const getCellStyle = (value) => {
    return { color: value === "X" ? "red" : "blue" };
  };
  const getCellClass = (index) => {
    if (winnerCombination && winnerCombination.includes(index)) {
      return board[index].toLowerCase() + "-winner";
    }
    return "";
  };
  return (
    <div className="board">
      {board.map((value, index) => (
        <div
          key={index}
          className={`cell ${getCellClass(index)}`}
          onClick={() => cellClick(index)}
          style={getCellStyle(value)}
        >
          {value}
        </div>
      ))}
    </div>
  );
};

export default Board;
