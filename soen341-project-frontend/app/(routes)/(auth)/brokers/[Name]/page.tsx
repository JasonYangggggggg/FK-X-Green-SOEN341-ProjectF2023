"use client";
import React, { useEffect, useState } from 'react';
import Broker from '@/app/(routes)/(auth)/brokersList/Broker'; 


import axios from 'axios';
import "./page.css";



export default function propertyDetails ({params}) {
    const [Users, setUsers] = useState([]);
    const [Brokers, setBrokers] = useState([]);
    const [query,setQuery] = useState("");
    const [user, setUser] = useState(null);
    
  
    //onMount
    useEffect(() => {
      getDataUsers();
      getDataBrokers();

    }, []);
  
    // Function to fetch and update house data
    const getDataUsers = async () => {
      try {
        const users = await axios.get("http://localhost:3001/user/get");
        setUsers(users.data);
  
        // // Set the fetched data to the houseData state if needed
        // setHouseData(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    const getDataBrokers = async () => {
      try {
        const brokers = await axios.get("http://localhost:3001/broker/get");
        setBrokers(brokers.data);
  
        // // Set the fetched data to the houseData state if needed
        // setHouseData(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    useEffect(() => {
      if (params.Name && Users.length > 0) {
        const foundUser = Users.find((user:any) => user.Name === params.Name);
        if (foundUser) {
          setUser(foundUser); // Update the user state only if a user is found
          
        } else {
          // Handle case where user is not found with given _id
          setUser(null); // Optionally reset the user state to null
        }
      }
    }, [params._id, Users]);
   
   

   // const broker = Brokers.find((broker: any, i) => {
      //return user.Name == broker.Name;
 // })
 const Name = params.Name
 const broker = Brokers.find((broker: any, i) => {
     return broker.Name == Name ;
 })
  
  return (
    <div className = "details">
    <div className = "container" id = "container">
 

 <div className = "form-container sign-in">
   <form>
     
   
   <div className='names1'>{user?.Name}</div>
   
   
   </form>
 </div>
 
 <div className = "left-container">
   <div className = "left">
     

     <div className = "left-panel left-right">
     <div className = "info"> Phone Number: {broker?.PhoneNumber || "To Add"} </div>
     <div className = "info">Email: {broker?.Email || "To Add"}</div>
     <div className = "info">License: {broker?.LicenseNumber || "To Add"} </div>
     <div className = "info">Agency: {broker?.Agency || "To Add"}</div>
      
      
     </div>

   </div>

 </div>
</div>
</div>
         
  )
}

