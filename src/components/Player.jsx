import { useState } from "react";

export default function Player({
  initialName,
  symbol,
  isActive,
  onChangeName,
}) {
  const [isEditing, setIsEditing] = useState(false);
  const [playerName, setPlayerName] = useState(initialName);
  let nameField = <span className="player-name">{playerName}</span>;

  function handleChange(e) {
    setPlayerName(() => e.target.value.toUpperCase());
  }

  if (isEditing) {
    nameField = (
      <input type="text" onChange={handleChange} value={playerName} required />
    );
  }

  function handleToogle() {
    setIsEditing((prevState) => !prevState);

    if (isEditing) {
      onChangeName(symbol, playerName);
    }
  }

  return (
    <li className={isActive ? "active" : null}>
      <span className="player">
        {nameField}
        <span className="player-symbol">{symbol}</span>
      </span>
      <button onClick={handleToogle}>{isEditing ? "Save" : "Edit"}</button>
    </li>
  );
}
