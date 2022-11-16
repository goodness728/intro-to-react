
import { useState } from 'react';
import './App.css';

function App() {
  const [count, setCount] = useState(0);


  return (
    <div className="App">
      <header className="App-header">{count}
      <button>Increase Count</button>
      </header>
      
    </div>
  );
}

export default App;
