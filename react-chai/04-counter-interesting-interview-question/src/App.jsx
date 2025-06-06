import { useState } from 'react';
import './App.css';

function App() {
  const [counter, setCounter] = useState(15)

  const addValue = () => {
    if (counter < 50) {
      // setCounter(counter + 1);
      // setCounter(counter + 1);
      // setCounter(counter + 1);
      // setCounter(counter + 1);
      // setCounter(counter + 1);

      setCounter((prevCounter) => prevCounter + 1);
      setCounter((prevCounter) => prevCounter + 1);
      setCounter((prevCounter) => prevCounter + 1);
      setCounter((prevCounter) => prevCounter + 1);
      setCounter((prevCounter) => prevCounter + 1);
    }
    else {
      console.log("cannot go above 50...");
    }
  }

  const removeValue = () => {
    if (counter > 0) {
      setCounter(counter - 1);
    }
    else {
      console.log("cannot go below 0...");
    }
  }

  return (
    <>
      <h1>chai aur react</h1>
      <h1>Counter Value: {counter}</h1>
      <button onClick={addValue}>Add Value</button>
      <br />
      <br />
      <button onClick={removeValue}>Remove Value</button>
    </>
  )
}

export default App
