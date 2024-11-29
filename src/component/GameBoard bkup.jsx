import { useState } from "react";

const initialGameBoard = [
    [null, null, null],
    [null, null, null],
    [null, null, null],
];

// [
//     Rohit => {0, 1} , 
//     Sandipan => {1, 2} ,
//     Rohit => {2,2}
// ]
// const initialGameBoard = [
//     ['X', null, null],
//     [null, null, null],
//     [null, null, null],
// ];

// const initialGameBoard = [
//     ['X', '0', 'X'],
//     ['X', '0', 'X'],
//     ['X', '0', 'X'],    
// ];

// Array(9).fill(null)

// export default function GameBoard({onSelectSquare, activePlayerSymbol}){
export default function GameBoard({onSelectSquare, turns}){

    const [gameBoard, setGameBoard] = useState (initialGameBoard);

function handleSelectSquare(rowIndex, colIndex){

    // Check if the cell is already occupied
    if (gameBoard[rowIndex][colIndex]!== null) {
        return;
    }

    setGameBoard(
        (prevGameBoard)=>{

            //  update the game board immutably            
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

    {gameBoard.map((row, rowIndex) => ( // row
        <li key={rowIndex}>
           <ol>
                {row.map((playerSymbol, colIndex) =>(
                       <li key={colIndex}>
                                <button onClick={()=> handleSelectSquare(rowIndex, colIndex)}>{playerSymbol}</button>
                        </li>
                ))}
            </ol> 
        </li>
    )
    )}
    </ol>
)
}