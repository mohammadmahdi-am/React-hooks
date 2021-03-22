import React, { useReducer } from "react";
const initialState = 0;
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "INCREMENT":
      return state + 1;
    case "DECREMENT":
      return state - 1;
    case "RESET": return initialState
    default:
      return state;
  }
};
function HookReducerThree() {
 const [count,dispatch] =  useReducer(reducer, initialState);
 const [countTwo,dispatchTwo] =  useReducer(reducer, initialState);

  return (
    <div>
        <h1>count 1 - {count}</h1>
        
      <button onClick={()=>dispatch({type:"INCREMENT"})}>Increment 5</button>
      <button onClick={()=>dispatch({type:"DECREMENT"})}>Decrement</button>
      <button onClick={()=>dispatch({type:"RESET"})}>Reset</button>
       
       <h1>count 2 - {countTwo}</h1>
      <button onClick={()=>dispatchTwo({type:"INCREMENT"})}>Increment 5</button>
      <button onClick={()=>dispatchTwo({type:"DECREMENT"})}>Decrement</button>
      <button onClick={()=>dispatchTwo({type:"RESET"})}>Reset</button>
    </div>
  );
}

export default HookReducerThree;
