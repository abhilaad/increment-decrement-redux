
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { incNum, decNum } from "./action/index";

export default function App() {
  const myState = useSelector((state) => state.changeNumber);
  const dispatch = useDispatch();
  return (
    <div className="App">
      <h1>{myState}</h1>
      <button onClick={() => dispatch(incNum())}>Increment</button>
      <button onClick={() => dispatch(decNum())}>Decrement</button>

      <h2>Value will never go below 0</h2>
    </div>
  );
}


