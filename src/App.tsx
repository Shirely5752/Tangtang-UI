import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import MyLifeStory from './components/MyLifeStory';
import './styles/style.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/mylife" element={<MyLifeStory />} />
      </Routes>
    </Router>
  );
}

export default App;
