"use client";
import React, { useState } from 'react';
import Input from '@/app/_components/_input/input';
import Button from '@/app/_components/_button/button';
import './page.css';
import axios from 'axios';

export default function AddHouse() {
    const [Type, setType] = useState(null);
    const [City, setCity] = useState(null);
    const [Price, setPrice] = useState(null);
    const [Image, setImage] = useState(null);

    const typeHandler = (data : any) =>{
        setType(data.target.value);
    }

    const cityHandler = (data : any) =>{
        setCity(data.target.value)
    }

    const priceHandler = (data : any ) =>{
        setPrice(data.target.value)
    }

    const imageHandler = (data : any) =>{
        setImage(data.target.value);
    }

    const submit = async () => {
        console.log("Here");
        console.log('submitting....');
        const data = {
            Type: Type,
            City: City,
            Price: Price,
            Image: Image
        }
        console.log(data);

        const save = await axios.post('http://localhost:3001/house/add', data);


    }

    return (
       <div className="container-form">
            <div className="formAdd">
                <h2>Add a New House</h2>
                <div className='form'>
                 <div className = "elements">
                    
                <Input label="Type" type='text' handler={typeHandler}/>
                </div>  
                <div className = "elements">
                <Input label="City" type='text' handler={cityHandler}/>
                </div>
                <div className = "elements">
                <Input label="Price" type='text'  handler={priceHandler}/>
                </div >
                <div className = "elements">
                <Input label="Image" type='file'  handler={imageHandler}/>
               </div>
                
                </div>
                <Button label="Submit" handler={submit}/>
            </div>
       </div> 
    )
  }
  