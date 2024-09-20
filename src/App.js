import "./App.css";
import React, { useState } from "react";
import Header from "./components/Header";
import Info from "./components/Info";
import Board from "./components/Board";
import Restart from "./components/Restart";



const App = () => {

  const winCombinations = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  const [board, setBoard] = useState(Array(9).fill(null));
  const [moves, setMoves] = useState(0);
  const [isComputerPlayer, setIsComputerPlayer] = useState(false);
  const [gameOver, setGameOver] = useState(false); // Śledzenie stanu gry
  const [isPlayerTurn, setIsPlayerTurn] = useState(true);

  const currentPlayer = moves % 2 === 0 ? "X" : "O";
  if(currentPlayer==="O" && isComputerPlayer===true){
    setIsPlayerTurn(true);
  }else{
    setIsPlayerTurn(false);
  }


  const cellClick = (index) => {
    if (!board[index] && !gameOver && isPlayerTurn) {
      const newBoard = [...board];
      newBoard[index] = currentPlayer;
      setBoard(newBoard);
      setMoves(moves + 1);
      checkLogic(newBoard);
    }
  };
  const checkLogic = (newBoard) => {
    if (playerWon(newBoard)){
    console.log("WIN")
    setGameOver(true);
}

  };
  const playerWon = (newBoard) => {
    for (const combinations of winCombinations) {
      let [a, b, c] = combinations;
      if (newBoard[a] && newBoard[a] === newBoard[b] && newBoard[b] === newBoard[c]) {
        // paintCells(a, b, c);
        return [a, b, c];
      }
    }
    return false;
  };

  return (
    <div className="App">
      <Header
        setIsComputerPlayer={setIsComputerPlayer}
        // restartGame={restartGame}
        isComputerPlayer={isComputerPlayer}
      />
      {/* <Info infoText={infoText} infoColor={infoColor} /> */}
      <Board
        board={board}
        cellClick={cellClick}
        currentPlayer={currentPlayer}
      />
      {/* <Restart /> */}
    </div>
  );
};

export default App;
