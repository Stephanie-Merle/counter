import React, { useState } from "react";
import "./App.css";
import "./reset.css";
import Counter from "./components/counter";

const App = () => {
  const [count, setCount] = useState(0);
  const [display, setDisplay] = useState(false);

  const increment = () => {
    if (count < 18) {
      setCount(count + 1);
      setDisplay(false);
    }
    if (count === 17) {
      setDisplay(true);
    }
  };
  const decrement = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };
  return (
    <div className="container">
      <Counter add={increment} deduce={decrement} show={display} />
      <Counter add={increment} deduce={decrement} show={display} />
      <Counter add={increment} deduce={decrement} show={display} />
      <div className="sum"> {count}</div>
    </div>
  );
};

export default App;
