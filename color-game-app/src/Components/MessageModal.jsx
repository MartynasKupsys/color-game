export default function MessageModal({ setModal, generate, status, message, guessing }) {
  //   return (
  //     <>
  //       {modal ? (
  //         <div className="modalas-show">
  //           <div className="modalas-body">
  //             <div>Header</div>
  //             <div>Result</div>
  //             <div>Footer</div>
  //             <button onClick={() => setModal(0)}>Start new round</button>
  //           </div>
  //         </div>
  //       ) : null}
  //     </>
  //   );
  const startNewRound = () => {
    generate();
    setModal(0);
  };
  return (
    <>
      {" "}
      {status === -1 ? (
        <div className="modalas-show">
          <div className="modalas-body">
            <div className="modal-header">
              <h5 className="modal-title">Game Status</h5>
              <button type="button" className="btn" onClick={() => setModal(0)}>
                <span className="decoration">&times;</span>
              </button>
            </div>
            <div className="bg-danger modal-body">{message}</div>
            <div className="modal-footer">
              <button onClick={startNewRound} className="btn btn-primary">
                Start new round
              </button>
            </div>
          </div>
        </div>
      ) : (
        <div className="modalas-show">
          <div className="modalas-body">
            <div className="modal-header">
              <h5 className="modal-title">Game Status</h5>
              <button type="button" className="btn" onClick={() => setModal(0)}>
                <span className="decoration">&times;</span>
              </button>
            </div>
            <div style={{ backgroundColor: guessing }} className="modal-body">
              {message}
            </div>
            <div className="modal-footer">
              <button onClick={startNewRound} className="btn btn-primary">
                Start new round
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
