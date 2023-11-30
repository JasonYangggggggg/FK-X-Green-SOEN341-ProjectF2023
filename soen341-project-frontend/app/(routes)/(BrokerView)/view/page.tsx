"use client";
import React, { useState, useEffect } from 'react';
import Input from '@/app/_components/_input/input';
import Button from '@/app/_components/_button/button';
import axios from 'axios';
import { useRouter } from 'next/navigation';

    axios.defaults.withCredentials = true;
    
    export default function addHouse() {

      useEffect(()=> {
        axios.get('http://localhost:3001/reservation/getReservationDetails').then(res => {
          console.log(res.data);
        }).catch(err => console.log(err))
        },[]);
    
      return (
        <div>Here is the broker's page</div>
      );
    }
    
    
