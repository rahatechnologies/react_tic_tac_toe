import { useState } from "react"
import GameBoard from "./component/GameBoard"
import Header  from "./component/Header"
import Player from "./component/Player"
// import OpenModalOption from "./component/OpenModalOption"
function App() {

  const Symbol_X  = "X";
  const Symbol_0  = "0";
  const [activePlayer, setActivePlayer] = useState(Symbol_X);

  function handleSelectSquare() {
            setActivePlayer((curActivePlayer) => curActivePlayer === Symbol_X ? Symbol_0 : Symbol_X );
  }

  return (
    <>
    <Header />

    <main>
        <div id="game-container">
     
     {/*  Player Section */}
          <ol id="players">
            <Player initialName="Player 1" symbol={Symbol_X} />          
            <Player initialName="Player 2" symbol= {Symbol_0} />          
          </ol>
     
     
     {/*  Game Board Section */}
        <GameBoard onSelectSquare={handleSelectSquare} activePlayerSymbol={activePlayer} />
        </div>
    </main>
    
    </>
    // <OpenModalOption/>
  )
}

export default App
