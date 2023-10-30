"use client";
import React, { useState, useEffect } from "react";
import "./listing.css";
import axios from "axios";

export default function Listing() {
  const [Houses, setHouses] = useState([]);

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
      <article>
        <br />

        {Houses?.length ? (
          <ul>
            {Houses.map((House: any, i) => {
              return (
                <li key={i}>
                  Type: {House?.Type}
                  <br />
                  City: {House?.City}
                  <br />
                  Price: {House?.Price}$
                  <br />
                  Image: {House?.Image}
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
