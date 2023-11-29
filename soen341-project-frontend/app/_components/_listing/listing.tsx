"use client";
import React, { useState, useEffect } from "react";
import "./listing.css";
import axios from "axios";
import Input from "../_input/input";
import Button from "../_button/button";
import defaultHouse from "./defaultHouse.png";
import kameHouse from "./kameHouse.jpg";
import { Stack, TextField } from "@mui/material";
import Link from "next/link";
import Image from 'next/image';
import houseIMG from "./houseIMG.jpeg";

export default function Listing() {
  const [Houses, setHouses] = useState([]);
  const [query, setQuery] = useState("");
  const [showPopup, setShowPopup] = useState(false);
  const [selectedHouse, setSelectedHouse] = useState() as any;

  const [name, setname] = useState("");

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

  // Function to handle button click and show pop-up
  const handleRequestVisit = (House: any) => {
    setSelectedHouse(House);
    console.log(House);
    setShowPopup(true);
  };

  const closePopup = () => {
    setShowPopup(false);
  };

  // Function to handle the actual visit request
  const handleConfirmVisit = () => {
    console.log("Visit confirmed for house:", selectedHouse);
    // Close the pop-up after processing
    closePopup();
  };

  return (
    <div>
      <div className="search-div">
        <div>
          <input
            type="text"
            placeholder="Search..."
            className="Search"
            onChange={(e) => setQuery(e.target.value)}
          />
        </div>
        <Input label="Type" type="select" handler={() => {}} />

        <Input label="Price" type="select" handler={() => {}} />
        <Button label="Search" handler={() => {}} />
      </div>
      <article>
        <br />

        {Houses?.length ? (
          <ul className="listing">
            {Houses.filter(
              (House: any, i) =>
                House.Type.toLowerCase().includes(query) ||
                House.City.toLowerCase().includes(query)
            ).map((House: any, i) => {
              return (
                <div className="general">
                <div className = "img">
                <Image className= "houseImg" src = {houseIMG} alt ='' width = "275"/>
                </div>
                <div className="elements">
                <li className="listingElement" key={i}>
                  
                  <div className = "attributes" >
                  Type: <div id = "one">{House?.Type}</div>
                  </div>
                  <div className = "attributes">
                  City: <div id = "two">{House?.City}</div>
                  </div>
                  <div className = "attributes">
                  Price: <div id = "three">{House?.Price}$</div>
                  </div>
                  
                  
                  
                  

                  <br />
                  <br />
                </li>
                <div className="buttons">
                  <Link  href={`/calculator/${House?.Price}`}>
                  <button className="mortgage">Mortgage Calculator</button>
                  </Link>
                  <button
                    className="requestBtn"
                    onClick={() => handleRequestVisit(House)}
                  >
                    Request visit
                  </button>
                  </div>
                </div>
                </div>
              );
            })}
          </ul>
        ) : (
          <p>No House requests to display</p>
        )}
      </article>

      {/* Pop-up/modal */}
      {showPopup && (
        <div className="popup ">
          <div className="popup-content ">
            <p>
              {/*Confirm visit for {selectedHouse?.Type} in {selectedHouse?.City}?*/}
            </p>

            {/* Content of the pop-up */}
            <img src={kameHouse.src} className="popupImage" alt="default"></img>

            {/* <li className="popupListing ">
              <h2>
                Type: {selectedHouse?.Type}
                <br />
                <br />
                City: {selectedHouse?.City}
                <br />
                <br />
                Price: {selectedHouse?.Price}$
                <br />
                <br />
              </h2>
            </li> */}
            <div className="popupListing">
              <h2>Fill out form</h2>
              <Stack spacing={4}>
                <Stack direction="column" spacing={3}>
                  <TextField
                    label={selectedHouse?.City}
                    variant="standard"
                    color="secondary"
                    InputProps={{ readOnly: true }}
                    helperText="House location"
                    disabled
                  />
                  <TextField
                    label="Name"
                    variant="standard"
                    color="secondary"
                    required
                    error
                  />
                  <TextField
                    label="Adress"
                    variant="standard"
                    color="secondary"
                    required
                    error
                  />
                  <TextField
                    label="Phone number"
                    variant="standard"
                    color="secondary"
                    required
                    error
                  />
                </Stack>
              </Stack>
            </div>

            {/* Confirm and Close buttons */}
            <button className="popupButton" onClick={handleConfirmVisit}>
              Confirm
            </button>
            <button className="popupButton" onClick={closePopup}>
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
