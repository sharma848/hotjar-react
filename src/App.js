import logo from './logo.svg';
import './App.css';
import { hotjar } from 'react-hotjar'
import { useEffect } from 'react';
import { useNavigate } from "react-router-dom";

function App() {
  const navigate = useNavigate();
  useEffect(() => {
    hotjar.initialize(2812984,6);
    window.hj('trigger', 'home_page_hotjar_application')
  },[]);
  const redirectToDetails = () => {
    navigate("/details");
  }
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Hotjar Application Tesing App home page
        </p>
        <button onClick={redirectToDetails} className="button">Sign In</button>
        <button onClick={redirectToDetails} className="button sign-up">Sign Up</button>
        <button onClick={redirectToDetails} className="button subscribe">Let's Begin</button>
        <button onClick={redirectToDetails} className="button about-us">About Us</button>
        <button onClick={redirectToDetails} className="button search">Search</button>
      </header>
    </div>
  );
}

export default App;
