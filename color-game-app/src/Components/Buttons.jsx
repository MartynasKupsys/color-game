export default function Buttons({ generate, modas, text, lifes, setModal }) {
  return (
    <div className="flex-container-buttons">
      <div>
        <div className="start-game">Start game</div>
        <button className="btn btn-1 bg-success" onClick={generate}>
          Start
        </button>
      </div>
      <div className="result">
        <div>Lifes left:</div>
        <h2>{lifes}</h2>
      </div>

      <div>
        <div className="change-mode">Change game mode</div>
        <button className="btn btn-1 bg-info" onClick={modas}>
          {text}
        </button>
      </div>

      {/* <div>
        <div className="change-mode">Open Modal</div>
        <button className="btn bg-warning" onClick={() => setModal((p) => !p)}>
          Open Modal
        </button>
      </div> */}
    </div>
  );
}
