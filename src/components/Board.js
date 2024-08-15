import Cell from "./Cell";

function Board() {
  let board = Array(9).fill(null);

  return (
    <div>
      BOARD
      <Cell />
      <Cell />
      <Cell />
      <Cell />
    </div>
  );
}

export default Board;
