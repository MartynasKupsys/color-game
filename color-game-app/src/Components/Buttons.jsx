export default function Buttons({ generate, modas, text }) {
  return (
    <div className="flex-container-buttons">
      <div>
        <div className="start-game">Click to start game</div>
        <button className="btn bg-success" onClick={generate}>
          Start
        </button>
      </div>

      <div>
        <div className="change-mode">Click to change game mode</div>
        <button className="btn bg-info" onClick={modas}>
          {text}
        </button>
      </div>
    </div>
  );
}
