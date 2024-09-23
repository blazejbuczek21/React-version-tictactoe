import "./header.css";
import React from "react";

const Header = ({
  setIsComputerPlayer,
  restartGame,
  isComputerPlayer,
  setInfoText,
  currentPlayer,
}) => {
  return (
    <div className="container">
      <div className="header">
        <div className="title">Tic Tac Toe</div>
      </div>
      <div className="mode">
        <div
          onClick={() => {
            setIsComputerPlayer(true);
            setInfoText(`Your move ${currentPlayer}`);
          }}
          className={
            isComputerPlayer === true ? "header_item_active" : "header_item"
          }
        >
          Computer
        </div>
        <div
          onClick={() => {
            setIsComputerPlayer(false);
            setInfoText(`Player ${currentPlayer} turn`);
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
