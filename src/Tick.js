import React, {useState} from "react";

function Tick() {
  const [count, setCount] = useState(0);
  const increment = () => {
    setCount(count + 1);
   }
  const decrement = () => {
    setCount(count - 1);
}
  return (
    <div className="counter-container">
      <h1>it's {new Date().toLocaleTimeString()}.</h1>
      <h1>number {count}</h1>
      <button onClick={increment}>increment</button>
      <button onClick={decrement}>decrement</button>
    </div>
  );
}
export default Tick;