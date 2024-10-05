import React from "react";
import "./info.css";

const Info = ({ infoText, currentPlayer }) => {
  const getInfoStyle = (currentPlayer) => {
    if (infoText === "Draw" || infoText === "Wait for computer move!") {
      return { color: "black" };
    }
    return { color: currentPlayer === "X" ? "red" : "blue" };
  };
  return (
    <h1 className="info" style={getInfoStyle(currentPlayer)}>
      {infoText}
    </h1>
  );
};

export default Info;
