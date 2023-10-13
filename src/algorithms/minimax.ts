import { TURNS } from "../constants/game-constans";
import { checkGameOver } from "../utils/checkGameOver";

export function searchBestMove(
  board: (string | null)[],
  aiMove: string,
  difficulty: string
) {
  let depth = 0;
  if (board.every((cell) => cell === null))
    return Math.floor(Math.random() * 9);

  const availableMoves = board
    .map((cell, index) => (cell === null ? index : null))
    .filter((cell) => cell !== null);

  console.log(availableMoves)
  if (difficulty === "easy") {
    return availableMoves[Math.floor(Math.random() * availableMoves.length)] as number;
  } else if (difficulty === "medium") {
    depth = 3;
    if (availableMoves.length === 8)
      return availableMoves[Math.floor(Math.random() * availableMoves.length)] as number;
  } else if (difficulty === "impossible") depth = 5;
  let bestMove = -1;
  let playerMove = "";

  let bestScore = Infinity;
  for (let i = 0; i < board.length; i++) {
    const newBoard = [...board];
    if (newBoard[i] === null) {
      newBoard[i] = aiMove;
      const gameOver = checkGameOver(newBoard as string[]);
      if (gameOver === aiMove) return i;
      if (aiMove === "X") playerMove = TURNS.O;
      else playerMove = TURNS.X;
      const score = minimax(newBoard, depth, playerMove, true);
      bestScore = Math.min(bestScore, score);
      if (bestScore === score) {
        bestMove = i;
      }
    }
  }
  return bestMove;
}

function minimax(
  board: (string | null)[],
  depth: number,
  turn: string,
  maximazingPlayer: boolean
): number {
  const gameOver = checkGameOver(board as string[]);
  if (depth === 0) return 0;
  if (gameOver === turn) return 1;
  else if (gameOver === "draw") return 0;
  else if (gameOver) return -1;

  if (maximazingPlayer) {
    let bestScore = -Infinity;
    for (let i = 0; i < board.length; i++) {
      const newBoard = [...board];
      if (newBoard[i] === null) {
        newBoard[i] = turn;
        const score = minimax(newBoard, depth - 1, turn, false);
        bestScore = Math.max(bestScore, score);
      }
    }
    return bestScore;
  } else {
    let bestScore = Infinity;
    for (let i = 0; i < board.length; i++) {
      const newBoard = [...board];
      if (newBoard[i] === null) {
        newBoard[i] = turn === "X" ? "O" : "X";
        const score = minimax(newBoard, depth - 1, turn, true);
        bestScore = Math.min(bestScore, score);
      }
    }
    return bestScore;
  }
}
