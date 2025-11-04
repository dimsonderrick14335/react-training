import { useState } from "react";
import Button from "./components/Button";
import Counter from "./components/Counter";
import "./styles.css";

export default function App() {
  // let number = 0;
  const [number, setNumber] = useState(0);

  function add() {
    //number++;
    setNumber(number + 1);
    console.log(number);
  }

  function substract() {
    // number--;
    setNumber(number - 1);
    console.log(number);
  }

  return (
    <div className="App">
      <h1>Compteur</h1>
      <Counter>{number}</Counter>
      <Button click={substract} content="-" />
      <Button click={add} content="+" />
    </div>
  );
}
