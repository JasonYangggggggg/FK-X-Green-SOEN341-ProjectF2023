"use client";
import React from 'react'
import "./login.css";
import Link from 'next/link';

const Login = () => {
  return (
    <div>
    <div className = "SignIn-Page">
    <div className = "container" id = "container">
      

      <div className = "form-container sign-in">
        <form>
          <h1>Sign In</h1>
        
        <input type = "text" placeholder='Name'/>
        <input type = "password" placeholder='Password'/>
        <button>Sign In</button>
        </form>
      </div>
      
      <div className = "left-container">
        <div className = "left">
          

          <div className = "left-panel left-right">
          <h1> Welcome Back!</h1>
            <p>Enter your personal details to look for a nice house</p>
           
            <button  id = "register"><Link href= '/register'>Sign Up</Link></button>
          </div>

        </div>

      </div>
    </div>
    
    </div>
    
    </div>
  )
}

export default Login