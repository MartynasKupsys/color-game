export default function Squares({ guess, kvs }) {
  return (
    <div className="kvadratai">
      {kvs.map((el, i) =>
        el === "rgb(40, 44, 52)" ? (
          <div className="kv" style={{ backgroundColor: el }} key={i}></div>
        ) : (
          <div className="kv" style={{ backgroundColor: el }} key={i} onClick={guess}></div>
        )
      )}
    </div>
  );
}
