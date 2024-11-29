import { useState } from 'react';

import Player from './component/Player.jsx';
import GameBoard from './component/GameBoard.jsx';
import Log from './component/Log.jsx';

const SYMBOL_X= 'X';
const SYMBOL_O= 'O';

function deriveActivePlayer(gameTurns) {

  let currentPlayer = SYMBOL_X;

  if (gameTurns.length > 0 && gameTurns[0].player === SYMBOL_X) {
    currentPlayer = SYMBOL_O;
  }

  return currentPlayer;
}


function App() {

  const [gameTurns, setGameTurns] = useState([]);
  const activePlayer = deriveActivePlayer(gameTurns);

  function handleSelectSquare(rowIndex, colIndex) {
   setGameTurns((prevTurns) => {

      const currentPlayer =  deriveActivePlayer(prevTurns);
      const updatedTurns = [
        { 
          square: 
            { 
              row: rowIndex,
              col: colIndex 
            },
          player: currentPlayer 
        },
        ...prevTurns,
      ];

      return updatedTurns;
    });
  }

  return (
    <main>
      <div id="game-container">
        <ol id="players" className="highlight-player">
          <Player
            initialName="Player 1"
            symbol="X"
            isActive={activePlayer === SYMBOL_X}
          />
          <Player
            initialName="Player 2"
            symbol="O"
            isActive={activePlayer === SYMBOL_O}
          />
        </ol>
        <GameBoard
          onSelectSquare={handleSelectSquare}
          turns={gameTurns}
        />
      </div>
      <Log turns={gameTurns}/>
    </main>
  );
}

export default App;
