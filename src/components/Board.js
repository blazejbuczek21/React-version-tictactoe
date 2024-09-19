import "./board.css";
import React from "react";

const Board = ({ board, cellClick }) => {
  return (
    <div className="board">
      {board.map((cell, index) => (
        <div key={index} className="cell" onClick={() => cellClick(index)}>
          {cell}
        </div>
      ))}
    </div>
  );
};

export default Board;
