import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  const handleNameChange = () => {
    const names = ['John', 'Jane', 'Bob', 'Alice', 'Charlie', 'David']
    const randomName = names[Math.floor(Math.random() * names.length)]
    return randomName
  }

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <h2>Hello {handleNameChange()}</h2>
      </div>
    </>
  )
}

export default App
