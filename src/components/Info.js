import React from "react";
import "./info.css";

const Info = ({ infoText, infoColor }) => {
  return (
    <div className="info" style={{ infoColor }}>
      {infoText}
    </div>
  );
};

export default Info;
