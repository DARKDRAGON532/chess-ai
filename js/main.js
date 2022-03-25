import "../css/style.css";
import "../css/chessboard-1.0.0.min.css"
import { Chess } from "chess.js";

const chess = new Chess();
const board = Chessboard("#board", {
  draggable: true,
  position: "start",
  onDragStart: onDragStart,
  onDrop: onDrop,
  onSnapEnd: onSnapEnd,
});

function onDragStart(_s, piece, _p, _o) {
  if (chess.game_over()) return false;

  if (piece.search(/^b/) !== -1) return false;
}

function evalBoard(color = "b") {
  const values = {
    p: 100,
    n: 350,
    b: 350,
    r: 525,
    q: 1000,
    k: 10000,
  };
  let value = 0;
  chess.board().forEach((row, rIdx) => {
    row.forEach((p, pIdx) => {
      if (p) {
        value += values[p.type] * (p.color == color ? 1 : -1);
      }
    });
  });
  return value;
}

function getMove(
  depth,
  game,
  a = Number.NEGATIVE_INFINITY,
  b = Number.POSITIVE_INFINITY,
  isMaximizingPlayer = true
) {
  if (depth === 0) {
    const v = evalBoard();
    return [v, null];
  }
  let best_move = null;
  let possibleMoves = chess.moves();
  possibleMoves.sort((a, b) => 0.5 - Math.random());
  let best_move_value = isMaximizingPlayer
    ? Number.NEGATIVE_INFINITY
    : Number.POSITIVE_INFINITY;
  // Search through all possible moves
  for (let i = 0; i < possibleMoves.length; i++) {
    let move = possibleMoves[i];
    chess.move(move);
    let value = getMove(
      depth - 1,
      game,
      a,
      b,
      !isMaximizingPlayer
    )[0];

    if (isMaximizingPlayer) {
      if (value > best_move_value) {
        best_move_value = value;
        best_move = move;
      }
      a = Math.max(a, value);
    } else {
      if (value < best_move_value) {
        best_move_value = value;
        best_move = move;
      }
      b = Math.min(b, value);
    }
    chess.undo();
    if (b <= a) break
  }
  return [best_move_value, best_move || possibleMoves[0]];
};

function makeMove() {
  chess.move(getMove(3)[1]);
}

function onDrop(source, target) {
  const move = chess.move({
    from: source,
    to: target,
    promotion: getPromotion(),
  });

  if (move === null) return "snapback";

  makeMove();
}

function getPromotion() {
  for (const v of ["q", "r", "b", "n"]) {
    if (document.getElementById(v).checked) {
      return v;
    }
  }
}

function onSnapEnd() {
  board.position(chess.fen());
  if (chess.game_over()) document.getElementById("title").innerText = "Game Over";
}
