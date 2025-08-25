export default function GaveOver({ winner, onRestart }) {
  return (
    <div id="game-over">
      <h2>GameOver!</h2>
      {winner && <p>{winner} won!</p>}
      {!winner && <p>{winner} Draw!</p>}

      <p>
        <button onClick={onRestart}>Rematch!</button>
      </p>
    </div>
  );
}
