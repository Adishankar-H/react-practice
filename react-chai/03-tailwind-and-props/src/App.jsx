// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <h1 className='bg-green-400 text-black p-4 rounded-xl mb-4'>tailwind test</h1>
      <Card username="Adi" btnText="click me" />
      <Card username="Hitesh" btnText="Visit me" />
      {/* <Card /> */}
    </>
  )
}

export default App
