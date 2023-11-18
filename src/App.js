import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css';
import Home from './Home';
import Video from './Video';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route exact path='/' element={<Home/>}></Route>
          <Route exact path='Video' element={<Video/>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App