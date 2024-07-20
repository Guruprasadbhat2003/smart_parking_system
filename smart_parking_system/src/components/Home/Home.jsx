import React, { useState }  from 'react';
import { FaParking } from "react-icons/fa";
import { useMediaQuery } from "react-responsive";
import Toggle from "react-toggle";
const Home =()=>{
  return (
    <div class="home">
      <header>

        <h1><FaParking />SMART<br/>PARKING</h1>
     
      </header>
      
      <main>
        <p><b>Find  Your's Space to Park</b></p>
        <p><b>Payment and Management</b></p>
        <button>click me!</button>
      </main>
    


     </div>

  );
} 

function Home () {

  const handleClick = () => {
    alert('Button clicked!');
  };

  return (
    <div>
      <h1>Welcome to my website!</h1>
      <button onClick={handleClick}>Click me!</button>
    </div>
  );
}

export default Home;
