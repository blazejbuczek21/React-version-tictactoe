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
  const [gameOver, setGameOver] = useState(false);
  const [isPlayerTurn, setIsPlayerTurn] = useState(true);
  const [currentPlayer, setCurrentPlayer] = useState("X");
  const [infoText, setInfoText] = useState(`Player X turn`);
  const [winnerCombination, setWinnerCombination] = useState(null);

  const cellClick = (index) => {
    if (!board[index] && !gameOver && isPlayerTurn) {
      const newBoard = [...board];
      newBoard[index] = currentPlayer;
      setBoard(newBoard);
      setMoves((prevMoves) => prevMoves + 1);
      checkLogic(newBoard, currentPlayer);
    }
    if (!isPlayerTurn) {
      setInfoText("Wait for computer move!");
    }
  };

  const checkLogic = (newBoard, currentPlayer) => {
    if (playerWon(newBoard)) {
      setGameOver(true);
      setInfoText(`Player ${currentPlayer} won`);
    }
    if (moves === 8 && !playerWon(newBoard)) {
      setGameOver(true);
      setInfoText(`Draw`);
    }
    if (!playerWon(newBoard) && moves !== 8) {
      const nextPlayer = currentPlayer === "X" ? "O" : "X";
      setCurrentPlayer(nextPlayer);
      if (isComputerPlayer === false) {
        setInfoText(`Player ${nextPlayer} turn`);
      }
      if (isComputerPlayer === true && nextPlayer === "O") {
        setInfoText(`${nextPlayer} is thinking`);
        setIsPlayerTurn(false);
        setTimeout(() => {
          makeComputerMove(newBoard, nextPlayer);
        }, 2000);
      }
      if (isComputerPlayer === true && nextPlayer === "X")
        setInfoText(`Your move ${nextPlayer}`);
    }
  };

  const makeComputerMove = (newBoard, nextPlayer) => {
    let emptyCells = [];
    for (let i = 0; i < newBoard.length; i++) {
      if (!newBoard[i]) emptyCells.push(i);
    }
    let randomIndex = Math.floor(Math.random() * emptyCells.length);
    let move = emptyCells[randomIndex];
    newBoard[move] = nextPlayer;
    setBoard(newBoard);
    setMoves((prevMoves) => prevMoves + 1);
    setIsPlayerTurn(true);
    setCurrentPlayer(nextPlayer === "X" ? "O" : "X");
    checkLogic(newBoard, nextPlayer);
  };

  const playerWon = (newBoard) => {
    for (const combinations of winCombinations) {
      let [a, b, c] = combinations;
      if (
        newBoard[a] &&
        newBoard[a] === newBoard[b] &&
        newBoard[b] === newBoard[c]
      ) {
        setWinnerCombination([a, b, c]);
        return [a, b, c];
      }
    }
    return false;
  };

  const restartGame = (a, b, c) => {
    if (isPlayerTurn) {
      setBoard(Array(9).fill(null));
      setMoves(0);
      setGameOver(false);
      setCurrentPlayer("X");
      setWinnerCombination([a, b, c]);
    }
    if (!isPlayerTurn) {
      setInfoText("Wait for computer move!");
    }
    if (!isComputerPlayer) {
      setInfoText(`Player X turn`);
    }
  };
  return (
    <div className="App">
      <Header
        setIsComputerPlayer={setIsComputerPlayer}
        setInfoText={setInfoText}
        restartGame={restartGame}
        isComputerPlayer={isComputerPlayer}
        isPlayerTurn={isPlayerTurn}
      />
      <Info infoText={infoText} />
      <Board
        board={board}
        cellClick={cellClick}
        winnerCombination={winnerCombination}
      />
      <Restart
        restartGame={restartGame}
        isPlayerTurn={isPlayerTurn}
        isComputerPlayer={isComputerPlayer}
      />
    </div>
  );
};

export default App;
