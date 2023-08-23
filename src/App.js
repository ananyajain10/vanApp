import './App.css';
import './style.css'
import React from "react";
import Home from './componemts/Home';
import About from './componemts/About';
import Navbar from './componemts/Navbar';
import  ReactDOM  from 'react-dom/client';
import {BrowserRouter,Routes,Route,Link} from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Navbar/>
      <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/about" element={<About/>}/>
      </Routes>
    </BrowserRouter>
    
  );
}







export default App;
