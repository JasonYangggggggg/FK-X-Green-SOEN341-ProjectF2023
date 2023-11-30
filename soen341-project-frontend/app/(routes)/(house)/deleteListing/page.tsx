import React, { useState } from 'react';
import Input from '@/app/_components/_input/input';
import Button from '@/app/_components/_button/button';
import './page.css';
import axios from 'axios';

export default function DeleteHouse() {
  const [id, setId] = useState('');

  const idHandler = (data) => {
    setId(data.target.value);
  };

  const deleteListing = async () => {
    
    await axios.delete(`http://localhost:3001/house/delete/${id}`);
  };

  return (
    <div className="container-form">
      <div className="formDelete">
        <h2>Delete House Listing</h2>
        <Input label="ID" type="text" handler={idHandler} />
        <Button label="Delete" handler={deleteListing} />
      </div>
    </div>
  );
}
