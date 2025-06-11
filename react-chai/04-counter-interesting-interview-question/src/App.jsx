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


// Notes:


// Why setCounter(counter + 1) Doesn’t Work as Expected
// What’s Happening:
// Imagine you look at the notebook, and the number is 15. You tell the assistant five times: “Take the number in the notebook (15) and add 1 to it.”
// You expect the assistant to:
// First time: Change 15 to 16.
// Second time: Change 16 to 17.
// Third time: Change 17 to 18, and so on, until you get 20.
// But the assistant has a rule: they don’t update the notebook until they’ve heard all your instructions (this is called batching in React).
// The Problem:
// When you say “take the number (15) and add 1” five times, the assistant hears all five instructions at once and looks at the notebook only once, seeing 15 each time.
// So, all five instructions become: “Set the number to 15 + 1 = 16.”
// The assistant picks the last instruction and writes 16 in the notebook, ignoring the other four because they all say the same thing (set to 16).
// Result: The number only goes from 15 to 16, not 15 to 20.
// Why It Fails:
// The assistant (React) doesn’t update the notebook after each instruction. It waits until you’re done talking, so it doesn’t know the number changed to 16 before the next instruction. It keeps using the original number (15).



// Why setCounter((prevCounter) => prevCounter + 1) Works
// What’s Happening:
// Now, instead of saying “take the number (15) and add 1,” you tell the assistant: “Look at the latest number in the notebook and add 1.”
// The assistant follows a different rule with this instruction: they check the notebook each time they apply an update, ensuring they always use the most recent number.
// How It Works Step-by-Step:
// You give five instructions: “Look at the latest number and add 1.”
// The assistant processes them one by one:
// First: Looks at 15, adds 1, writes 16.
// Second: Looks at 16, adds 1, writes 17.
// Third: Looks at 17, adds 1, writes 18.
// Fourth: Looks at 18, adds 1, writes 19.
// Fifth: Looks at 19, adds 1, writes 20.
// Result: The number goes from 15 to 20, exactly as you wanted.