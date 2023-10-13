import { COMBOWINNER } from "../constants/game-constans";

export const checkGameOver = (currentBoard: string[]) => {
  for (const combo of COMBOWINNER) {
    const [a, b, c] = combo;
    if (
      currentBoard[a] &&
      currentBoard[a] === currentBoard[b] &&
      currentBoard[b] === currentBoard[c]
    )
      return currentBoard[a];
  }
  const draw = currentBoard.every((cell) => cell !== null);
  const drawResult = draw ? "draw" : "";
  return drawResult;
};
