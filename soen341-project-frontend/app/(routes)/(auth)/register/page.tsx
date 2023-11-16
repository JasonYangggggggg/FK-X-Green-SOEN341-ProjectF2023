'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import "./register.css";

import axios from 'axios';

const Register = () => {

   const [Name, setName] = useState(null);
   const [Password, setPassword] = useState(null);
   const [UserType, setUserType] = useState(null); // Add state for user type

   const nameHandler = (data : any) =>{
       setName(data.target.value);
   }

   const passwordHandler = (data : any) =>{
       setPassword(data.target.value)
   }

   const userTypeHandler = (data : any) =>{ // Add handler for user type
       setUserType(data.target.value)
   }

   const signup = async () => {
      if((Name !== null && Name !== '') && (Password !== null && Password !== '') && (UserType !== null && UserType !== '')){ // Check if user type is not null or empty
         const data = {
            Name,
            Password,
            UserType // Add user type to data object
        }
        const save = await axios.post('http://localhost:3001/user/signup', data);
      }
   }

  return (
    <div>
    <div className = "SignUp-Page">
    <div className = "container" id = "container">
      <div className = "form-container sign-up">
        <form>
          <h1>Create Account</h1>
        
        <input type = "text" placeholder='Name' onChange={nameHandler} required/>
        <input type = "password" placeholder='Password' onChange={passwordHandler} required/>
        <select onChange={userTypeHandler} required> // Add dropdown input element
          <option value="">Select User Type</option>
          <option value="Broker">Broker</option>
          <option value="Homebuyer">Homebuyer</option>
        </select>
        <button onClick={signup}>Sign Up</button>
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
