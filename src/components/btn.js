import React from "react";

const Btn = props => {
  return (
    <div className="btn">
      <button disabled={props.show} onClick={props.action}>
        {props.value}
      </button>
    </div>
  );
};

export default Btn;
