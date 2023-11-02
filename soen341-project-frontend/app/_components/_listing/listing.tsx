"use client";
import React, { useState, useEffect } from "react";
import "./listing.css";
import axios from "axios";
import Input from "../_input/input";
import Button from '../_button/button';

export default function Listing() {
  const [Houses, setHouses] = useState([]);
  const [query,setQuery] = useState("");

  //onMount
  useEffect(() => {
    getData();
  }, []);

  // Function to fetch and update house data
  const getData = async () => {
    try {
      const houses = await axios.get("http://localhost:3001/house/get");
      setHouses(houses.data);

      // // Set the fetched data to the houseData state if needed
      // setHouseData(data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  return (
    <div>
      <div className="search-div">
     
     
     
       
     
       
    <div>
     <input type = "text" placeholder="Search..." className = "Search" onChange = {e => setQuery(e.target.value)}/>
     
     </div>
     <Input label="Type" type="select" handler={()=>{}}/>
       
       <Input label="Price" type="select" handler={()=>{}}/>
       <Button label="Search" handler={()=>{}}/>
       </div>
      <article>
        <br />

        {Houses?.length ? (
          <ul className="listing">
            {Houses.filter((House:any,i) => House.Type.toLowerCase().includes(query) || House.City.toLowerCase().includes(query)).map((House: any, i) => {
              return (
                <li className = "listingElement" key={i}>
                  Type: {House?.Type}
                  <br />
                  City: {House?.City}
                  <br />
                  Price: {House?.Price}$
                  <br />
                  Image: {House?.Image}
                  <br />
                  <button className = "requestBtn">Request visit</button>
                  <br />
                  <br />
                </li>
              );
            })}
          </ul>
        ) : (
          <p>No House requests to display</p>
        )}
      </article>
    </div>
  );
}
