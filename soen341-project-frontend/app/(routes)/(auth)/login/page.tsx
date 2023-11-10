"use client";
import React, { useState } from 'react'
import "./login.css";
import Link from 'next/link';

import axios from 'axios';

const Login = () => {

   const [Name, setName] = useState(null);
   const [Password, setPassword] = useState(null);

   const nameHandler = (data : any) =>{
       setName(data.target.value);
   }

   const passwordHandler = (data : any) =>{
       setPassword(data.target.value)
   }

   const login = async () => {
      if((Name !== null && Name !== '') && (Password !== null && Password !== '')){
         const data = {
            Name,
            Password
        }
        const save = await axios.post('http://localhost:3001/user/login', data);
      }
   }
   
  return (
    <div>
    <div className = "SignIn-Page">
    <div className = "container" id = "container">
      

      <div className = "form-container sign-in">
        <form>
          <h1>Sign In</h1>
        
        <input type = "text" placeholder='Name' onChange={nameHandler}/>
        <input type = "password" placeholder='Password' onChange={passwordHandler}/>
        <button onClick={login}>Sign In</button>
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
  
