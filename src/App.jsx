
import { useState } from 'react';
import './App.css';

function App() {
  const [count, setCount] = useState(0);
function getRandomNumber() {
  return Math.floor(Math.random() * 10);
}
  return (
    <div className="App">
      <header className="App-header">{getRandomNumber()}</header>
    </div>
  );
}

export default App;
