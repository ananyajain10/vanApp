import '../style.css'
import React from "react";
import  ReactDOM  from 'react-dom/client';
import {Link} from 'react-router-dom';

function Navbar(){
    return(
      <div class="nav">
        <h1>#VANLIFE</h1>
        <div class="nav-item">
         <div class="nav-element"><Link to="/">Home</Link></div>
         <div class="nav-element"><Link to="/about">About</Link></div>
        </div>
      </div>
    )
  }

export default Navbar;  