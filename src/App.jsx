import './App.css';
import Navbar from './components/Navbar';
import LandingPage from './components/LandingPage';
import Footer from './components/Footer';
import { useState } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

function App() {
  const [bgColor, setBgColor] = useState('white');

  return (
    <Router>
      <div>
          <Navbar/>
          <LandingPage/>
          <Footer/>
      </div>
    </Router>
  )
}

export default App
