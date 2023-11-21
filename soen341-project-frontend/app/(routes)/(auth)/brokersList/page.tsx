
"use client";
import React, { useState, useEffect } from "react";
import Link from 'next/link';
import axios from "axios";
import Broker from "./Broker";

import "./page.css";

const page = () => {
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
  /*console.log(Users);*/
  return (
    <div className='app'>
      <div className = "box">
      <div className="sentence">Find your broker here</div>
      <input type = "text" placeholder="Search..." className = "loop" onChange = {e => setQuery(e.target.value)}/>
      </div>
      <article>
        <br />

        
          <ul className="list">
            {Users.filter((User:any,i) => User.Name.toLowerCase().includes(query)).map((User: any, i) => {
              
              return  <Link className='link' href={`/brokers/${User.Name}`} >
                
              <Broker broker = {User}/> 
          </Link>;
            })}
          </ul>
        
      </article>
    </div>
    
  )
}

export default page