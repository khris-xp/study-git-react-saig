import { useState } from 'react'
import './App.css'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

function App() {
  const [count, setCount] = useState<number>(0)

  const [clicked, setClicked] = useState<boolean>(false);

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
      <h2>China number one</h2>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Ctrl +Click on the Vite and React logos to learn more 555
      </p>
      <p className="my-doc">
        This is pawit branch
      </p>
      <img src="https://upload.wikimedia.org/wikipedia/commons/3/35/KMITL_PCC.png" alt="logo" />
      <div>
        Hi from khris-xp
      </div>
      <div>
        <button onClick={() => handleClick()}>{clicked ? "I have Clicked" : "Clicked me."}</button>
      </div>
    </>
  )
}

export default App
