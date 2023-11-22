import { useState } from 'react'
import './App.css'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

function App() {
  const [count, setCount] = useState<number>(0)
  const [clicked, setClicked] = useState<boolean>(false);

  function handleCount(): void {
    setCount((count) => count + 1);
  }

  function handleClick(): void {
    setClicked(!clicked);
  }

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Hacked By Gan-ISUS</h1>
      <div className="card">
        <button onClick={() => handleCount()}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more 555
      </p>
      <p className="my-doc">
        This is pawit branch
      </p>
      <div>
        Hello from khris-xp
      </div>
      <div>
        <button onClick={() => handleClick()}>{clicked ? "I have Clicked" : "Clicked me."}</button>
      </div>
    </>
  )
}

export default App
