import { useEffect, useState, useContext } from 'react'

import TicTacToeHeader from '../components/game/TicTacToeHeader'
import TicTacToeFooter from '../components/game/TicTacToeFooter';
import Board from '../components/game/Board';
import WinnerModal from '../components/game/WinnerModal';

import { SettingsContext } from '../context/settingsContext';

export default function TicTacToe() {

  const TURNS = {
    X: 'X',
    O: 'O'
  };

  const COMBOWINNER = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ];

  const [board, setBoard] = useState(new Array(9).fill(null));
  const [turn, setTurn] = useState<string>('X');
  const [winner, setWinner] = useState<string>('');
  const [isOver, setGameOver] = useState(false);
  const [score, setScore] = useState<{ X: number; O: number; D: number; }>({ X: 0, O: 0, D: 0 });
  const [round, setRound] = useState<number>(0);

  const { timer } = useContext(SettingsContext)
  const [time, setTime] = useState<number>(Number(timer))

  const resetGame = () => {
    setBoard(Array(9).fill(null));
    setTurn('X');
    setWinner('');
    setGameOver(false);
    setTime(Number(timer));
  };

  const checkGameOver = (currentBoard: string[]) => {
    for (const combo of COMBOWINNER) {
      const [a, b, c] = combo;
      if (currentBoard[a] &&
        currentBoard[a] === currentBoard[b] &&
        currentBoard[b] === currentBoard[c])
        return currentBoard[a];
    }
    const draw = currentBoard.every(cell => cell !== null);
    const drawResult = draw ? 'draw' : '';
    return drawResult;
  };

  const drawSymbolOnBoard = (cell: number) => {
    if (!isOver) {
      const boardUpdated = [...board];
      if (boardUpdated[cell] === null) {
        boardUpdated[cell] = turn;
        setBoard(boardUpdated);

        const gameOver = checkGameOver(boardUpdated);
        if (gameOver !== '') {
          gameOverTrigger(gameOver);
        }

        const newTurn = turn === TURNS.X ? TURNS.O : TURNS.X;
        setTurn(newTurn);
        setTime(Number(timer));
      }
    }
  };

  const gameOverTrigger = (gameOver: string) => {
    setWinner(gameOver);
    setGameOver(true);
    setRound(round => round + 1);
    const currentScore = { ...score };
    if (gameOver === 'X') currentScore.X++;
    if (gameOver === 'O') currentScore.O++;
    if (gameOver === 'draw') currentScore.D++;
    setScore(currentScore);
  }

  useEffect(() => {
    if(timer === 'unlimited') return
    if (time > 0) {
      const interval = setInterval(() => {
        setTime((prevTime) => prevTime - 1);
      }, 1000);

      return () => clearInterval(interval);
    }
    if (time === 0) {
      gameOverTrigger(turn === TURNS.X ? TURNS.O : TURNS.X)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [time])

  return (
    <>
      <section className='tictactoe-container'>
        <TicTacToeHeader round={round} />
        <Board board={board} drawSymbolOnBoard={drawSymbolOnBoard} />
        <TicTacToeFooter score={score} turn={turn} time={time} />
      </section>
      {isOver && <WinnerModal winner={winner} resetGame={resetGame} />}
    </>
  );
}
