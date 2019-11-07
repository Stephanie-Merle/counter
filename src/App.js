import React, { useReducer } from "react";
import "./App.css";
import "./reset.css";
import Counter from "./components/counter";

const App = () => {
  const [state, dispatch] = useReducer(reducer, { count: 0, display: false });

  function reducer(state, action) {
    switch (action.type) {
      case "increment":
        if (state.count === 17) {
          return { count: state.count + 1, display: true };
        } else if (state.count < 18) {
          return { count: state.count + 1, display: false };
        } else {
          return { count: state.count, display: true };
        }
      case "decrement":
        if (state.count > 0 && state.count < 19) {
          return { count: state.count - 1, display: false };
        } else {
          return { count: state.count, display: false };
        }
      default:
        throw new Error();
    }
  }

  return (
    <div className="container">
      <Counter
        add={() => dispatch({ type: "increment" })}
        deduce={() => dispatch({ type: "decrement" })}
        show={state.display}
      />
      <Counter
        add={() => dispatch({ type: "increment" })}
        deduce={() => dispatch({ type: "decrement" })}
        show={state.display}
      />
      <Counter
        add={() => dispatch({ type: "increment" })}
        deduce={() => dispatch({ type: "decrement" })}
        show={state.display}
      />
      <div className="sum"> {state.count}</div>
    </div>
  );
};

export default App;
