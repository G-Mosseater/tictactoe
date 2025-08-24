import { useState } from "react";

export default function Player({ name, symbol }) {
  const [isEditing, setIsEditing] = useState(false);
  function handleClick() {
     setIsEditing(!isEditing);
  }
  return (
    <li>
      <span className="player">
        {isEditing ? <span className="player-name">{name}</span> : <input/> }
        <span className="player-symbol">{symbol}</span>
      </span>
      <button onClick={handleClick}>Edit</button>
    </li>
  );
}
