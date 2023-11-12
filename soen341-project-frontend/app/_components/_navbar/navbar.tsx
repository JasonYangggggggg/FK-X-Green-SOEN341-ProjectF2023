"use client";
import React from 'react';
import './navbar.css';
import Link from 'next/link';

const Navbar = () => {
   
    return (
        <div className="nav-bar">
        <div className="homeContainer">
        
          <button className="homeBtn"><Link href="/">Home</Link></button>
          
        </div>
        <div className="buttonContainer">
          <button className="loginBtn">
            <Link href="/login">Login</Link>
          </button>
          <button className="registerBtn">
            <Link href="/register">Register</Link>
          </button>
          <button className="addBtn">
            <Link href="/addHouse">Add House</Link>
          </button>

          <div className="list-choice">
            <div className="list-choice-title"></div>
                <div className="list-choice-objects">
                    <label>
                        <input type="radio" name="month"/> 
                        <span><Link href = "/brokersList">Brokers</Link></span>
                    </label>
                    <label>
                        <input type="radio" name="month"/>   
                     <span><Link href = "/addInfo">Add Info</Link></span>
                    </label>
   
    
  </div>
</div>
          
          
         
        </div>
      </div>
    );
  };
  
  export default Navbar;
  
  
  
  
  
  
