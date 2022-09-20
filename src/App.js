import React, { useState } from 'react'
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from '../src/component/Home/index'

function App() {

  return (
    <div className="App">
      <>
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
           
          </Routes>
        </Router>
      </>
    </div>
  );
}

export default App;
