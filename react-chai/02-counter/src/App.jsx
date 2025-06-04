import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'

function App() {

  let [counter, setCounter] = useState(5);      // does the same job as let counter = 5;

  // let counter = 5;

  const addValue = () => {
    // counter = counter + 5;                   // can be directly written in setCounter(counter + 5);
    // setCounter(counter);                     // instead of incrementing counter and passing it in setCounter
    if (counter < 50) {
      setCounter(counter + 5);
    }
    else {
      console.log("cannot go above 50...");
    }

  }

  const removeValue = () => {
    // counter = counter - 5;
    // setCounter(counter);
    if (counter > 0) {
      setCounter(counter - 5);
    }
    else {
      console.log("cannot go below 0...");
    }

  }

  return (
    <>
      <h1>Chai aur react</h1>
      <h2>counter : {counter}</h2>

      <button onClick={addValue}>Add Value {counter}</button>
      <br />
      <button onClick={removeValue}>Remove Value{counter}</button>
      <p>footer: {counter}</p>
    </>
  )
}

export default App
