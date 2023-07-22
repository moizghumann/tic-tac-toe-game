import { useState } from "react";
import Square from "./components/Square";

const App = () => {
  const [squares, setSquares] = useState<string[]>(Array(9).fill(""));
  const [turn, setTurn] = useState<string>("x");
  const [winStatus, setWinStatus] = useState<string | null>(null);

  const checkWinner = (squares: string[]) => {
    const combos = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];

    for (let combo of combos) {
      const [a, b, c] = combo;
      if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
        return squares[a];
      }
    }
    return null;
  };

  const handleSquareClick = (index: number) => {
    if (squares[index] || winStatus) {
      return;
    }
    const newSquares = [...squares];
    newSquares[index] = turn;
    setSquares(newSquares);
    setTurn(turn === "x" ? "o" : "x");
    const winner = checkWinner(newSquares);
    if (winner) {
      setWinStatus(winner);
      alert(`${winner} won the game`);
    } else if (newSquares.every((square) => square)) {
      setWinStatus("Tie");
      alert("Game was tied");
    }
  };

  const resetGame = () => {
    setSquares(Array(9).fill(''));
    setTurn("x");
    setWinStatus(null);
  }

  return (
    <>
      <div className="h-screen bg-black flex justify-center items-center">
        <div className="text-white text-center">
          <h1 className="py-3">{turn}'s turn</h1>
          <div className="bg-red-500 h-80 w-80 rounded grid grid-cols-3 gap-1 p-1.5">
            {squares.map((value, index) => (
              <Square
                key={index}
                value={value}
                onClick={() => handleSquareClick(index)}
              />
            ))}
          </div>
          <button className="my-3 p-2 px-4 bg-gray-600 rounded-sm" onClick={resetGame}>Reset</button>
        </div>
      </div>
    </>
  );
};

export default App;