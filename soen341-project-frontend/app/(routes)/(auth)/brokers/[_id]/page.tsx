"use client";
import React, { useEffect, useState } from 'react';
import Broker from '@/app/(routes)/(auth)/brokersList/Broker'; 


import axios from 'axios';
import "./page.css";



export default function propertyDetails ({params}) {
    const [Users, setUsers] = useState([]);
    const [query,setQuery] = useState("");
  
    //onMount
    useEffect(() => {
      getData();
    }, []);
  
    // Function to fetch and update house data
    const getData = async () => {
      try {
        const users = await axios.get("http://localhost:3001/user/get");
        setUsers(users.data);
  
        // // Set the fetched data to the houseData state if needed
        // setHouseData(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    const _id = params._id
    const user = Users.find((user: any, i) => {
        return user._id ==_id ;
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
     <div className = "info">Email:</div>
     <div className = "info">Gender: </div>
      
      
     </div>

   </div>

 </div>
</div>
</div>
         
  )
}

