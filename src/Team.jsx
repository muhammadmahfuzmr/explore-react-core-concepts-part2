import { useState } from "react";

export default function Team() {
  const [player, setPlayer] = useState(11);
  const teamStyle = {
    border: "2px solid purple",
    margin: "30px",
    padding: "30px",
    borderRadius: "15px",
  };
  function addPlayer() {
    setPlayer(player + 1);
  }
  const removePlayer = () =>{
    setPlayer(player - 1)
  }
  return (
    <div style={teamStyle}>
      <h2>Player: {player}</h2>
      <button onClick={addPlayer}>Add</button>
      <button onClick={removePlayer}>Remove</button>
    </div>
  );
}
