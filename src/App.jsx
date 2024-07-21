import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Home } from './pages/Home';
import './index.css'
import { CurriculumVitae } from './pages/CurriculumVitae';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/index.html" element={<Home />} />
        <Route path="/curriculum_vitae" element={<CurriculumVitae />} />
        <Route path="*" element={<h1 className='text-center text-dark mt-5'>Not found!</h1>} />
      </Routes>
    </Router>
  )
}

export default App
