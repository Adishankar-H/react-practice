import Hello from "./components/Hello"

function App() {
  const person = {
    name: "John ",
    message: "Hey...",
    emoji: "👋 ",
    seat_numbers: [1, 4, 6]
  }
  return (
    <>
      <Hello person={person} />
    </>
  )
}

export default App
