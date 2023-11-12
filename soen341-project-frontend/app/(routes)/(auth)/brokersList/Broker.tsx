"use client";
import React from 'react';
import Image from 'next/image';
import brokerImg from "./brokerImg.jpeg";
import{ useState, useEffect } from "react";
import "./Broker.css";

const Broker = ({broker}) => {
    const [query,setQuery] = useState("");
  return (
    <div className="listings">
      <Image className= "brokerImg" src = {brokerImg} alt =''/>
      
         <div className="names">
         <div> {broker.Name}</div>
         
         

    </div>
    </div>
  
  )
}
export default Broker;