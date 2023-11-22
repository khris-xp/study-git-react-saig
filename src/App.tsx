import { ChangeEvent, Fragment, useState } from 'react';
import './App.css';
import reactLogo from './assets/react.svg';
import viteLogo from './assets/vite.svg';

function App() {
  const [count, setCount] = useState(0);
  const [clicked, setClicked] = useState(false);
  const [name, setName] = useState('');
  const [bgColor, setBgColor] = useState('#ffffff');

  function handleCount() {
    setCount(count + 1);
  }

  function handleClick() {
    setClicked(!clicked);
  }

  function handleNameChange(event: ChangeEvent<HTMLInputElement>) {
    setName(event.target.value);
  }

  function toggleBgColor() {
    setBgColor(bgColor === '#ffffff' ? '#f2f2f2' : '#ffffff');
  }

  return (
    <Fragment>
      <div className='logos'>
        <a href='https://vitejs.dev' target='_blank' rel='noopener noreferrer'>
          <img src={viteLogo} className='logo spin' alt='Vite logo' />
        </a>
        <a href='https://react.dev' target='_blank' rel='noopener noreferrer'>
          <img src={reactLogo} className='logo react spin' alt='React logo' />
        </a>
      </div>
      <h1 className='spin'>Hacked By Gan-ISUS</h1>
      <h2>China number one</h2>

      <div className='card'>
        <button onClick={handleCount}>count is {count}</button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
        <br />
        <hr />
        <div>
          <button onClick={toggleBgColor}>Change Background Color</button>
        </div>
      </div>
      <p className='read-the-docs'>Ctrl +Click on the Vite and React logos to learn more 555</p>
      <p className='my-doc'>This is pawit branch</p>
      <img src='https://upload.wikimedia.org/wikipedia/commons/3/35/KMITL_PCC.png' alt='logo' />
      <div>Hi from khris-xp</div>
      <div>
        <button onClick={handleClick}>{clicked ? 'I have Clicked' : 'Clicked'}</button>
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
    </Fragment>
  );
}

export default App;
