import { useState } from "react";
import { rand, generateColors3or6 } from "../Functions/colorGen";
import Buttons from "./Buttons";
import Squares from "./Squares";

export default function Container() {
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
    } else {
      setMode({ k: 3, text: "Easy" });
      setKvs(["rgb(255, 255, 255)", "rgb(255, 255, 255)", "rgb(255, 255, 255)"]);
      setGuessing("rgb(255, 255, 255)");
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
      return colors;
    });
  };

  function guess(e) {
    const chosenColor = e.target.style.backgroundColor;
    console.log("pasirinkta: " + chosenColor + "," + "teisinga: " + guessing);
    if (guessing === chosenColor) {
      console.log(chosenColor);
      setGuessed({ status: 1, message: "Atspejote!!" });
    } else {
      console.log(chosenColor);
      setGuessed({ status: 0, message: "Bandykite dar karta!!" });
    }
  }

  return (
    <div className="flex-container">
      <h1 style={status ? { backgroundColor: guessing } : { backgroundColor: "white" }}>
        {guessing}
      </h1>
      <div>{message}</div>
      <Buttons generate={generate} modas={modas} text={text}></Buttons>
      <Squares kvs={kvs} guess={guess}></Squares>
    </div>
  );
}
