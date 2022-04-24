import { useEffect, useState } from "react";
import { rand, generateColors3or6 } from "../Functions/colorGen";
import Buttons from "./Buttons";
import Squares from "./Squares";
import MessageModal from "./MessageModal";

export default function Container() {
  const [modal, setModal] = useState(0);
  const [lifes, setLifes] = useState(3);
  const [guessed, setGuessed] = useState({ status: 0, message: "" });
  const [guessing, setGuessing] = useState("rgb(255, 255, 255)");
  const [mode, setMode] = useState({ k: 3, text: "Easy" });
  const [kvs, setKvs] = useState([
    "rgb(255, 255, 255)",
    "rgb(255, 255, 255)",
    "rgb(255, 255, 255)",
  ]);
  const { k, text } = mode;
  const { status, message } = guessed;

  const modas = () => {
    if (k === 3) {
      setMode({ k: 6, text: "Hard" });
      setKvs([
        "rgb(255, 255, 255)",
        "rgb(255, 255, 255)",
        "rgb(255, 255, 255)",
        "rgb(255, 255, 255)",
        "rgb(255, 255, 255)",
        "rgb(255, 255, 255)",
      ]);
      setGuessing("rgb(255, 255, 255)");
      setLifes(3);
    } else {
      setMode({ k: 3, text: "Easy" });
      setKvs(["rgb(255, 255, 255)", "rgb(255, 255, 255)", "rgb(255, 255, 255)"]);
      setGuessing("rgb(255, 255, 255)");
      setLifes(3);
    }
  };

  //   const generate = () => {
  //     const colors = generateColors3or6(k);
  //     const guessingColor = colors[rand(0, colors.length - 1)];
  //     setKvs((old) => {
  //       return [...colors];
  //     });
  //     setGuessing(guessingColor);
  //   };
  // ARBA
  const generate = () => {
    const colors = generateColors3or6(k);
    setKvs(() => {
      setGuessing(colors[rand(0, colors.length - 1)]);
      setGuessed(0);
      setLifes(3);
      return colors;
    });
  };

  function guess(e) {
    const chosenColor = e.target.style.backgroundColor;
    if (guessing === chosenColor) {
      setGuessed({ status: 1, message: "YOU WON!! :D" });
      setModal(1);
    } else {
      setLifes((p) => p - 1);
      setGuessed({ status: 0, message: "Bandykite dar karta!!" });

      setKvs((p) => {
        return [...p].map((el) => {
          if (chosenColor === el) {
            el = "rgb(40, 44, 52)";
            return el;
          }
          return el;
        });
      });
    }
  }

  useEffect(() => {
    if (lifes === 0) {
      setGuessed({ status: -1, message: "GAME OVER!! :(" });
      setModal(1);
    } else if (lifes === 3) {
      setGuessed({ status: 0, message: "" });
    }
  }, [lifes]);

  return (
    <div className="flex-container">
      <h2 className="game-title">Color Guessing Game</h2>
      <h1 style={status === 1 ? { backgroundColor: guessing } : { backgroundColor: "white" }}>
        {guessing}
      </h1>
      {status === 0 ? <div>{message}</div> : null}

      <Buttons
        generate={generate}
        modas={modas}
        text={text}
        lifes={lifes}
        setModal={setModal}
      ></Buttons>

      {guessing === "rgb(255, 255, 255)" ? (
        <Squares kvs={kvs}></Squares>
      ) : (
        <Squares kvs={kvs} guess={guess}></Squares>
      )}

      {/* GAME OVER CONDITION */}
      {modal && status === -1 ? (
        <MessageModal
          setModal={setModal}
          generate={generate}
          status={status}
          message={message}
        ></MessageModal>
      ) : null}

      {/* GAME WON CONDITION */}
      {modal && status === 1 ? (
        <MessageModal
          setModal={setModal}
          generate={generate}
          status={status}
          message={message}
          guessing={guessing}
        ></MessageModal>
      ) : null}
    </div>
  );
}
