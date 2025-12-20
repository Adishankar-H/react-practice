import { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);
  const [increaseIncrement, setIncreaseIncrement] = useState(1);

  function increment() {
    setCount(count + increaseIncrement);
  }

  function decrement() {
    setCount(count - increaseIncrement);
  }

  function increaseIncrementFunction() {
    setIncreaseIncrement(increaseIncrement + 1);
  }

  function decreaseIncrementFunction() {
    setIncreaseIncrement(increaseIncrement - 1);
  }
  return (
    <div>
      <h1>Count Value is: {count}</h1>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
      <h1>We are incrementing by: {increaseIncrement}</h1>
      <button onClick={increaseIncrementFunction}>increase increment</button>
      <button onClick={decreaseIncrementFunction}>decrease increment</button>
    </div>
  );
}
