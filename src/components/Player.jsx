import { useState } from "react";

export default function Player({ initialName, symbol }) {
  const [name, setName] = useState(initialName)
  const [isEditing, setIsEditing] = useState(false);
  function handleClick() {
    setIsEditing(editing => !isEditing);
  }
  function handleChange(e) {
    setName(e.target.value)
  }
  return (
    <li>
      <span className="player">
        {!isEditing ? (
          <span className="player-name">{name}</span>
        ) : (
          <input type="text" value={name} onChange={handleChange} />
        )}
        <span className="player-symbol">{symbol}</span>
      </span>
      <button onClick={handleClick}>{isEditing ? "Save" : "Edit"}</button>
    </li>
  );
}
