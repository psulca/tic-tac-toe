/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState, useContext } from 'react'

import TicTacToeHeader from '../components/game/TicTacToeHeader'
import TicTacToeFooter from '../components/game/TicTacToeFooter';
import Board from '../components/game/Board';
import WinnerModal from '../components/game/WinnerModal';

import { SettingsContext } from '../context/settingsContext';
import { TURNS } from '../constants/game-constans'
import { checkGameOver } from '../utils/checkGameOver';

import { searchBestMove } from '../algorithms/minimax';

export default function TicTacToe() {

  const [board, setBoard] = useState(new Array(9).fill(null));
  const [turn, setTurn] = useState<string>('X');
  const [winner, setWinner] = useState<string>('');
  const [isOver, setGameOver] = useState(false);
  const [score, setScore] = useState<{ X: number; O: number; D: number; }>({ X: 0, O: 0, D: 0 });
  const [round, setRound] = useState<number>(1);

  const { timer, difficulty, gameMode } = useContext(SettingsContext)
  const [time, setTime] = useState<number>(Number(timer))

  const resetGame = () => {
    setBoard(Array(9).fill(null));
    setTurn('X');
    setWinner('');
    setGameOver(false);
    setTime(Number(timer));
  };

  const drawSymbolOnBoard = async (cell: number) => {
    if (!isOver) {
      const boardUpdated = [...board];
      if (boardUpdated[cell] === null) {
        boardUpdated[cell] = turn;
        setBoard(boardUpdated);
        const gameOver = checkGameOver(boardUpdated);
        if (gameOver !== '') {
          gameOverTrigger(gameOver);
        } else {
          const newTurn = turn === TURNS.X ? TURNS.O : TURNS.X;
          setTurn(newTurn);
          setTime(Number(timer));
        }
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
    if (timer === 'unlimited') return
    if (!isOver) {
      if (time > 0) {
        const interval = setInterval(() => {
          setTime((prevTime) => prevTime - 1);
        }, 1000);
        return () => clearInterval(interval);
      }
      if (time === 0) {
        gameOverTrigger(turn === TURNS.X ? TURNS.O : TURNS.X)
      }
    }
  }, [time])

  useEffect(() => {
    const boardUpdated = [...board];

    if (gameMode === 'PVC' && turn === TURNS.O) {
      const bestMove = searchBestMove(boardUpdated, turn, difficulty);
      boardUpdated[bestMove] = turn;
      setBoard(boardUpdated)

      const gameOver = checkGameOver(boardUpdated);
      if (gameOver !== '') {
        gameOverTrigger(gameOver);
      } else {
        const newTurn = turn === TURNS.X ? TURNS.O : TURNS.X;
        setTurn(newTurn);
        setTime(Number(timer));
      }
    }
  }, [turn])

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
