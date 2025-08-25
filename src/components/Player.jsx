import { useState } from "react";

export default function Player({ initialName, symbol, isActive, onChangeName }) {
  const [name, setName] = useState(initialName)
  const [isEditing, setIsEditing] = useState(false);
  function handleClick() {
    setIsEditing(editing => !isEditing);
    if (isEditing) {
    onChangeName(symbol, name)}
  }
  function handleChange(e) {
    setName(e.target.value)
  }
  return (
    <li className={isActive ? 'active' : undefined}>
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
