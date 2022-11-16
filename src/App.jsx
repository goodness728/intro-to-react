
import { useState } from 'react';
import './App.css';
import Adder from './components/Adder';
import Displayer from './components/Displayer';

function App() {
  const [count, setCount] = useState(0);
  const [count2, setCount2] = useState(0);

  function increaseCount() {
  setCount((curr) => {
    return curr + 1;
  });
}

  return (
    <div className="App">
      <header className="App-header">
        {count}
      <button onClick={increaseCount}>Increase Count</button>
      <Displayer count={count2} />
      <Adder setCount={setCount2} />
      </header>
      
    </div>
  );
}

export default App;
