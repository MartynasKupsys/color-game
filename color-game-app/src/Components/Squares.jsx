export default function Squares({ guess, kvs }) {
  return (
    <div className="kvadratai">
      {kvs.map((el, i) => (
        <div className="kv" style={{ backgroundColor: el }} key={i} onClick={guess}></div>
      ))}
    </div>
  );
}
