"use client";
import React, { useState, useEffect } from 'react';
import Input from '@/app/_components/_input/input';
import Button from '@/app/_components/_button/button';
import axios from 'axios';
import { useRouter } from 'next/navigation';
import "./page.css";


    axios.defaults.withCredentials = true;
    
export default function addHouse() {
  const [Reservations, setReservations] = useState([]);
  const [query,setQuery] = useState("");

  //onMount
  useEffect(() => {
    getData();
  }, []);

  // Function to fetch and update house data
  const getData = async () => {
    try {
      const reservations = await axios.get("http://localhost:3001/reservation/getReservationDetails");
      
      setReservations(reservations.data);

      // // Set the fetched data to the houseData state if needed
      // setHouseData(data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

      /*useEffect(()=> {
        axios.get('http://localhost:3001/reservation/getReservationDetails').then(res => {
          console.log(res.data);
        }).catch(err => console.log(err))
        },[]);*/
    
      return (
        <div>
          <div className='text'> 
            Requests From Users
          </div>
          
        <div>
          {Reservations.map((Reservation: any, i: number) => (

    <div className='sentence'>You have the request from {Reservation.ReserveeId.Name}</div>
     ))}
        </div>
        </div>

      );
    }
    
    
