import "./header.css";
import React from "react";

const Header = ({
  setIsComputerPlayer,
  restartGame,
  isComputerPlayer,
  setInfoText,
  isPlayerTurn,
}) => {
  return (
    <div className="container">
      <div className="header">
        <div className="title">Tic Tac Toe</div>
      </div>
      <div className="mode">
        <div
          onClick={() => {
            if (isPlayerTurn) {
              setIsComputerPlayer(true);
              restartGame();
              setInfoText(`Your move X`);
            }
          }}
          className={
            isComputerPlayer === true ? "header_item_active" : "header_item"
          }
        >
          Computer
        </div>
        <div
          onClick={() => {
            if (isPlayerTurn) {
              setIsComputerPlayer(false);
              setInfoText(`Player X turn`);
              restartGame();
            } else {
              setInfoText("Wait for computer move!");
            }
          }}
          className={
            isComputerPlayer === false ? "header_item_active" : "header_item"
          }
        >
          2 Players
        </div>
      </div>
    </div>
  );
};

export default Header;
