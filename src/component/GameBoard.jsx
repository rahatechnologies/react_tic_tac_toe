import { useState } from "react";

const initialGameBoard = [
    [null, null, null],
    [null, null, null],
    [null, null, null],
];

// Array(9).fill(null)

export default function GameBoard({onSelectSquare, activePlayerSymbol}){

    const [gameBoard, setGameBoard] = useState (initialGameBoard);

function handleSelectSquare(rowIndex, colIndex){

    // Check if the cell is already occupied
    if (gameBoard[rowIndex][colIndex]!== null) {
        return;
    }

    setGameBoard(
        (prevGameBoard)=>{

            // Create a new copy of the game board
            // const updateGameBoard = [...prevGameBoard];
            const updateGameBoard = [...prevGameBoard.map(innerArray => [...innerArray])];

            updateGameBoard[rowIndex][colIndex] = activePlayerSymbol;
            return updateGameBoard;
        });
   
        onSelectSquare();
}

return (
    <ol id="game-board">
      {/* Implement the game board using div elements with appropriate classes and ids */}
      {/* Display the game board with 3x3 cells */}

      {/* Add event listeners to each cell to handle cell click events */}
      {/* When a cell is clicked, update the cell's state to reflect the current player's symbol */}
      {/* Implement win condition checks and display a message when a player wins */}

    {gameBoard.map((row, rowIndex) => { // row
        <li key={rowIndex}>
           <ol>
                {row.map((playerSymbol, colIndex) =>{
                        <li key={colIndex}>
                                <button onClick={()=> handleSelectSquare(rowIndex, colIndex)}>{playerSymbol}</button>
                        </li>
                })}
            </ol> 
        </li>
    }
    )}
    </ol>
)
}