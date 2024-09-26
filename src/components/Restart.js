import "./restart.css";

function Restart({ restartGame }) {
  return (
    <button className="restart" onClick={restartGame}>
      Restart
    </button>
  );
}

export default Restart;
