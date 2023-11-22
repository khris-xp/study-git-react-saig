import { RefObject, useRef, useState } from 'react'
import './App.css'
import reactLogo from './assets/react.svg'
import { colors } from './constants/colors'
import viteLogo from '/vite.svg'

function App() {
  const [count, setCount] = useState<number>(0)
  const [clicked, setClicked] = useState<boolean>(false);
  const Ref: RefObject<HTMLParagraphElement> = useRef<HTMLParagraphElement>(null);
  const [name, setName] = useState<string>('')
  const [bgColor, setBgColor] = useState<string>('#ffffff')

  function handleCount(): void {
    setCount(count + 1)
  }

  function handleClick(): void {
    setClicked(!clicked)
  }

  function getRandomInt(max: number): number {
    return Math.floor(Math.random() * max);
  }

  function randomColor(): void {
    const random = getRandomInt(colors.length);
    if (Ref.current != null)
      Ref.current.style.color = colors[random];
  }

  function handleNameChange(event: React.ChangeEvent<HTMLInputElement>): void {
    setName(event.target.value)
  }

  function toggleBgColor(): void {
    setBgColor(bgColor === '#ffffff' ? '#f2f2f2' : '#ffffff')
  }

  setInterval(randomColor, 1000);

  return (
    <div ref={Ref} style={{ transition: "color 0.5s" }}>
      <div className='logos'>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo spin" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react spin" alt="React logo" />
        </a>
      </div>
      <h1 className='spin'>Hacked By Gan-ISUS</h1>
      <h2>China number one</h2>

      <div className="card">
        <button onClick={() => handleCount()}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
        <br />
        <hr />
        <div>
          <button onClick={toggleBgColor}>Change Background Color</button>
        </div>
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
        <button onClick={() => handleClick()}>{clicked ? "I have Clicked" : "Clicked"}</button>
      </div>

      <form>
        <label htmlFor='name'>Enter your name:</label>
        <input type='text' id='name' value={name} onChange={handleNameChange} />
      </form>

      <style>
        {`
          #root {
            max-width: 1280px;
            margin: 0 auto;
            padding: 2rem;
            text-align: center;
            background-color: ${bgColor};
          }
          /* Existing CSS styles... */
        `}
      </style>
    </div>
  )
}

export default App
