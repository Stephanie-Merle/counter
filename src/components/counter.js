import React, { useState } from "react";
import Btn from "./btn";

const Counter = props => {
  const [count, setCount] = useState(0);
  const increment = () => {
    if (count < 10) {
      setCount(count + 1);
      return props.add();
    }
  };
  const decrement = () => {
    if (count > 0) {
      setCount(count - 1);
      return props.deduce();
    }
  };

  return (
    <div className="counter">
      <div className="title">Counter : {count}</div>
      <div className="control">
        <Btn value="+" action={increment} show={props.show} />
        <Btn value="-" action={decrement} />
      </div>
    </div>
  );
};

export default Counter;
