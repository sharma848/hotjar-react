import logo from './logo.svg';
import './App.css';
import { hotjar } from 'react-hotjar'
import { useEffect } from 'react';

function App() {

  useEffect(() => {
    hotjar.initialize(2812984,6);
    window.hj('trigger', 'home_page_hotjar_application')
  },[]);
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Hotjar Application Tesing App
        </p>
        <button className="button">Sign In</button>
        <button className="button sign-up">Sign Up</button>
        <button className="button subscribe">Let's Begin</button>
        <button className="button about-us">About Us</button>
        <button className="button search">Search</button>
      </header>
    </div>
  );
}

export default App;
