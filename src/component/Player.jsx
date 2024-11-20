import { useState } from "react"
import OpenModalOption from "./OpenModalOption"; 
export default function Player({initialName, symbol}) {

    // Implement Player component to render player name and symbol with an edit button.
    // When the edit button is clicked, display a form with the player's name and symbol fields.
    // When the form is submitted, update the player's name and symbol in the parent component.

    const [playerName, setPlayerName] = useState(initialName);
    const [isEditing, setIsEditing] = useState(false);
    


function handleTextChange(event){
    // update playerName with the new value

    setPlayerName(event.target.value);
}

    function handleEditClick(){
        setIsEditing(!isEditing); // editing state changes (toggling)
    }
// UI related player Name
    let editablePlayerName = <span className="player-name">{playerName}</span>;
    // let playerSymbol = <span class="player-symbol">{symbol}</span>;
    // let btnCaption = 'Edit';

    if(isEditing){
        editablePlayerName = <input type="text" required value={playerName} onChange={(event) => handleTextChange(event)}/>;
        // btnCaption = 'Save'

   //     <form onSubmit={handleFormSubmit}>
    //     <input type="text" value={name} onChange={handleNameChange} />
    //     <input type="text" value={symbol} onChange={handleSymbolChange} />
    //     <button type="submit">Save</button>
    // </form>
    }



    return <li>
                <span className="player">
                    {editablePlayerName}
                    {/* <OpenModalOption/> */}
                    <span className="player-symbol">{symbol}</span>
                </span>
                {/* onloading check of btnCaption for edit button */}
                <button onClick={handleEditClick}>{isEditing ? 'Save' : 'Edit'} </button>
           </li>

}