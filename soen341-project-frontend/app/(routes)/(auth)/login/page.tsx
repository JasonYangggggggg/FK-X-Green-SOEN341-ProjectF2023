"use client";
import React, { useState } from 'react'
import "./login.css";
import Link from 'next/link';
import { useRouter } from 'next/navigation';

import axios from 'axios';

const Login = () => {
  const router = useRouter();
   const [Name, setName] = useState(null);
   const [Password, setPassword] = useState(null);

   const nameHandler = (data : any) =>{
       setName(data.target.value);
   }

   const passwordHandler = (data : any) =>{
       setPassword(data.target.value)
   }
   axios.defaults.withCredentials = true;
   const login = async (event:any) => {
    event.preventDefault(); 
      if((Name !== null && Name !== '') && (Password !== null && Password !== '')){
         const data = {
            Name,
            Password
        }
    try{
      const response =  await axios.post('http://localhost:3001/login', data);
      if(response.data){
        console.log("success");

    
       router.push("/");
      }
    }catch(error){
      console.log(error);
    }

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
        <button onClick={login}>log In</button>
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

export default Login;
  
