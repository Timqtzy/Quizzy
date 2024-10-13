import './App.css';
import Navbar from './components/Navbar';
import LandingPage from './components/LandingPage';
import Footer from './components/Footer';
import { useState } from 'react';

function App() {
  const [bgColor, setBgColor] = useState('white');

  return (
      <div>
          <Navbar/>
          <LandingPage/>
          <Footer/>
      </div>
  )
}

export default App
