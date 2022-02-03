import './App.css';
import { useNavigate } from "react-router-dom";
import { hotjar } from 'react-hotjar';

function Home() {
  const navigate = useNavigate();
  
  const redirectToDetails = () => {
    navigate("/details");
    hotjar.event('button-click')
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

export default Home;
