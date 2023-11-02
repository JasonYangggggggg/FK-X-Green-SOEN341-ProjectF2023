'use client';
import React from 'react';
import Link from 'next/link';
import "./register.css";


const Register = () => {
  return (
    <div>
    <div className = "SignUp-Page">
    <div className = "container" id = "container">
      <div className = "form-container sign-up">
        <form>
          <h1>Create Account</h1>
        
        <input type = "text" placeholder='Name'/>
        <input type = "password" placeholder='Password'/>
        <button>Sign Up</button>
        </form>
      </div>

      
      
      <div className = "right-container">
        <div className = "right">
          <div className = "right-panel right-left">
          <h1> Hello!</h1>
            <p>Register with your personal details to look for a nice house</p>
            <button  id = "login"><Link href= 'dashboard'>Sign In</Link></button>
          </div>

         

        </div>

      </div>
    </div>
    
    </div>
    
    </div>
    
  )
}

export default Register