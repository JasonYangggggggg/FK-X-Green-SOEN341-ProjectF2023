import React, { useState } from 'react';
import Input from '@/app/_components/_input/input';
import Button from '@/app/_components/_button/button';
import './page.css';
import axios from 'axios';

export default function UpdateHouse() {
  const [id, setId] = useState(null);
  const [Type, setType] = useState('');
  const [City, setCity] = useState('');
  const [Price, setPrice] = useState('');

  const idHandler = (data) => {
    setId(data.target.value);
  };

  const typeHandler = (data) => {
    setType(data.target.value);
  };

  const cityHandler = (data) => {
    setCity(data.target.value);
  };

  const priceHandler = (data) => {
    setPrice(data.target.value);
  };

  const update = async () => {
    const data = {
      Type: Type,
      City: City,
      Price: Price,
    };

    
    await axios.put(`http://localhost:3001/house/update/${id}`, data);
  };

  return (
    <div className="container-form">
      <div className="formUpdate">
        <h2>Update House Listing</h2>
        <Input label="ID" type="text" handler={idHandler} />
        <Input label="Type" type="text" handler={typeHandler} />
        <Input label="City" type="text" handler={cityHandler} />
        <Input label="Price" type="text" handler={priceHandler} />
        <Button label="Update" handler={update} />
      </div>
    </div>
  );
}
