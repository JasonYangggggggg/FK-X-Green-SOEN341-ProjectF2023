"use client";
import React, { useState, useEffect } from "react";
import "./listing.css";
import axios from "axios";
import Input from "../_input/input";
import Button from "../_button/button";
import defaultHouse from "./defaultHouse.png";
import kameHouse from "./kameHouse.jpg";
import { Stack, TextField } from "@mui/material";

export default function Listing() {
  const [Houses, setHouses] = useState([]);
  const [query, setQuery] = useState("");
  const [showPopup, setShowPopup] = useState(false);
  const [selectedHouse, setSelectedHouse] = useState(null);
  const [formData, setFormData] = useState({
    name: "",
    address: "",
    phoneNumber: "",
  });

  //onMount
  useEffect(() => {
    getData();
  }, []);

  // Function to fetch and update house data
  const getData = async () => {
    try {
      const houses = await axios.get("http://localhost:3001/house/get");
      console.log(houses);
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
        {/* ... (Your existing search inputs and buttons) */}
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
              // Check if Image property is an object
              let imageDataUrl = "";
              if (typeof House?.Image === "object") {
                // Extract the image data from the object (modify this part based on your data structure)
                imageDataUrl = `data:image/jpeg;base64,${Buffer.from(
                  House.Image.data
                ).toString("base64")}`;
              } else if (typeof House?.Image === "string") {
                // Handle the case where Image is already a string
                imageDataUrl = House.Image;
              }

              return (
                <li className="listingElement" key={i}>
                  Type: {House?.Type}
                  <br />
                  City: {House?.City}
                  <br />
                  Price: {House?.Price}$
                  <br />
                  Image: <img src={imageDataUrl} alt="house" />
                  <br />
                  <button
                    className="requestBtn"
                    onClick={() => handleRequestVisit(House)}
                  >
                    Request visit
                  </button>
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

      {/* Pop-up/modal */}
      {showPopup && (
        <div className="popup ">
          <div className="popup-content ">
            <p>
              Confirm visit for {selectedHouse?.Type} in {selectedHouse?.City}?
            </p>
            <img
              src={`data:image/jpeg;base64,${Buffer.from(
                selectedHouse?.Image
              ).toString("base64")}`}
              className="popupImage"
              alt="house"
            />
            <div className="popupListing">
              <h2>
                Type: {selectedHouse?.Type}
                <br />
                City: {selectedHouse?.City}
                <br />
                Price: {selectedHouse?.Price}$
              </h2>
            </div>
            <div className="popupListing">
              <h2>Fill out form</h2>
              <Stack spacing={4}>
                <Stack direction="column" spacing={3}>
                  {/* ... (Your existing form inputs) */}
                </Stack>
              </Stack>
            </div>
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
