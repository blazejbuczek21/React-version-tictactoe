import "./App.css";
import Heeader from "./components/Header";
import Info from "./components/Info";
import Board from "./components/Board";
import Restart from "./components/Restart";

const App = () => {
  return (
    <div>
      <Heeader />
      <Info />
      <Board />
      <Restart />
    </div>
  );
};

export default App;
