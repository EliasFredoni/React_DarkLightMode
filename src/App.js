import { useState } from 'react';
import './App.css';

function App() {

  const [light, setLight] = useState(true);

  return (
    <div className="App" style={{ color: light ? 'black' : 'white', backgroundColor: light ? 'white' : 'black' }}>
      <p>{light ? 'LIGHT' : 'DARK'}</p>
      <button onClick={() => setLight(!light)}>Change to {light ? 'Darkmode' : 'Lightmode'}</button>
    </div>
  );
}

export default App;
