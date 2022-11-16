
import { useState } from 'react';
import './App.css';

function App() {
  const [count, setCount] = useState(0);
  const [count2, setCount2] = useState(0);
function increaseCount() {
  setCount(count + 1);
}

  return (
    <div className="App">
      <header className="App-header">
        {count}
      <button onClick={increaseCount}>Increase Count</button>
      </header>
      
    </div>
  );
}

export default App;
