import React, { useReducer } from "react";
const initialState = {
    firstCounter : 0,
    secondCounter : 10
};
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "INCREMENT":
      return {...state,firstCounter : state.firstCounter +action.value};
    case "DECREMENT":
      return {...state,firstCounter : state.firstCounter - 1};
    case "RESET":
    case "INCREMENT2":
      return {...state,secondCounter : state.secondCounter +action.value};
    case "DECREMENT2":
      return {...state,secondCounter : state.secondCounter - 1};
    case "RESET":
      return initialState;
    default:
      return state;
  }
};
function HookReducerTwo() {
 const [count,dispatch] =  useReducer(reducer, initialState);

  return (
    <div>
        <h1>count 1 - {count.firstCounter}</h1>
        <h1>count 2 - {count.secondCounter}</h1>
      <button onClick={()=>dispatch({type:"INCREMENT",value:5})}>Increment 5</button>
      <button onClick={()=>dispatch({type:"DECREMENT"})}>Decrement</button>
      <button onClick={()=>dispatch({type:"INCREMENT2",value:5})}>Increment2- 5</button>
      <button onClick={()=>dispatch({type:"DECREMENT2"})}>Decrement2</button>
      <button onClick={()=>dispatch({type:"RESET"})}>Reset</button>
    </div>
  );
}

export default HookReducerTwo;
