import logo from './logo.svg';
import './App.css';
import { hotjar } from 'react-hotjar'
import { useEffect } from 'react';

function App() {

  useEffect(() => {
    hotjar.initialize(2812984,6);
  },[]);
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Hotjar Application
        </p>
      </header>
    </div>
  );
}

export default App;
