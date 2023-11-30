"use client";
import React, { useState } from 'react';
import Input from '@/app/_components/_input/input';
import Button from '@/app/_components/_button/button';
import "./page.css";
import axios from 'axios';

export default function AddInfo() {
    const [Name, setName] = useState(null);
    const [PhoneNumber, setPhoneNumber] = useState(null);
    const [Email, setEmail] = useState(null);
    const [LicenseNumber, setLicenseNumber] = useState(null);
    const [Agency, setAgency] = useState(null);

    const nameHandler = (data : any) =>{
      setName(data.target.value);
    }

    const phoneNumberHandler = (data : any) =>{
      setPhoneNumber(data.target.value)
    }

    const emailHandler = (data : any ) =>{
      setEmail(data.target.value)
    }

    const licenseNumberHandler = (data : any) =>{
        setLicenseNumber(data.target.value);
    }
    const agencyHandler = (data : any) =>{
        setAgency(data.target.value);
  }

    const submit = async () => {
        console.log("Here");
        console.log('submitting....');
        const data = {
            Name: Name,
            PhoneNumber: PhoneNumber,
            Email: Email,
            LicenseNumber: LicenseNumber,
            Agency: Agency
            
        }
        console.log(data);

        const save = await axios.post('http://localhost:3001/broker/add', data);


    }

    return (
       <div className="infobox">
            <div className="formAdd">
                <h2 className = "line">Add Information About Yourself</h2>
                <div className='form'>
                 <div className = "elements">
                    
                <Input label="Name" type='text' handler={nameHandler}/>
                </div>  
                <div className = "elements">
                <Input label="PhoneNumber" type='text' handler={phoneNumberHandler}/>
                </div>
                <div className = "elements">
                <Input label="Email" type='text'  handler={emailHandler}/>
                </div >
                <div className = "elements">
                <Input label="License Number" type='text'  handler={licenseNumberHandler}/>
               </div>
               <div className = "elements">
                <Input label="Agency" type='text'  handler={agencyHandler }/>
               </div>
                
                </div>
                <div className='button'>
                <Button label="Submit" handler={submit}/>
                </div>
            </div>
       </div> 
    )
  }
  