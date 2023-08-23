import '../style.css'
import React from "react";
import  ReactDOM  from 'react-dom/client';

function About(){
    return(
      <div class="about">
        <img class="about-img" src='travel.png'/>
        <h1 >Don't squeeze in a sedan when you could relax in a van.</h1>
       <div class="about-card">
        <p class="aboutp">Our mission is to enliven your road trip with the perfet travel van rental
          Our van are recertified before each trip to ensure your travel plans can go off 
          without a hitch.Hitch coasts extra.
  
        </p>
        <br/><br/>
        <p>
          Our team is full of vanlife enthusiasts
          who knows firsyhand the magic of touring the world on 4 wheels.      
           </p>
  
           <br/><br/>
  
           
            <h2>
              Your destination is waiting.
              Your van is ready.
              </h2>
              <br/>
              <button class="buttonA">Explore Our vans</button>
            
            
           </div>
      </div>
    )
  }

export default About;  