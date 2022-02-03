import './App.css';
import { hotjar } from 'react-hotjar'
import { useEffect } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Details from './Details';
import Home from './Home';

function App() {
  useEffect(() => {
    hotjar.initialize(2812984,6);
    window.hj('trigger', 'home_page_hotjar_application')
  },[]);
  
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/details" element={<Details />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
