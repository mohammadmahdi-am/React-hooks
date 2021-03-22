import React, { useReducer } from "react";
const initialState = 0;
const reducer = (state = initialState, action) => {
  switch (action) {
    case "INCREMENT":
      return state + 1;
    case "DECREMENT":
      return state - 1;
    case "RESET":
      return 0;
    default:
      return state;
  }
};
function HookReducerOne() {
 const [count,dispatch] =  useReducer(reducer, initialState);

  return (
    <div>
        <h1>count - {count}</h1>
      <button onClick={()=>dispatch("INCREMENT")}>Increment</button>
      <button onClick={()=>dispatch("DECREMENT")}>Decrement</button>
      <button onClick={()=>dispatch("RESET")}>Reset</button>
    </div>
  );
}

export default HookReducerOne;
