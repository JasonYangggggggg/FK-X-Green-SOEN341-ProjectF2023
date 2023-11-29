/* Before Image functionality 
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
  */
  "use client";
  /*
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
    */
    import React, { useState } from 'react';
    import Input from '@/app/_components/_input/input';
    import Button from '@/app/_components/_button/button';
    import axios from 'axios';
    
    export default function addHouse() {
      const [Type, setType] = useState('');
      const [City, setCity] = useState('');
      const [Price, setPrice] = useState('');
      const [Image, setImage] = useState(null);
    
      const typeHandler = (event) => {
        setType(event.target.value);
      };
    
      const cityHandler = (event) => {
        setCity(event.target.value);
      };
    
      const priceHandler = (event) => {
        setPrice(event.target.value);
      };
    
      const imageHandler = (event) => {
        const file = event.target.files[0];
        setImage(file);
      };
    
      const submit = async () => {
        const formData = new FormData();
        formData.append('Type', Type);
        formData.append('City', City);
        formData.append('Price', Price);
        formData.append('Image', Image);
    
        try {
          const save = await axios.post('http://localhost:3001/house/add', formData);
          console.log('House added successfully', save.data);
        } catch (error) {
          console.error('Error adding house:', error);
        }
      };
    
      return (
        <div className="container-form">
          <div className="formAdd">
            <h2>Add a New House</h2>
            <div className="form">
              <div className="elements">
                <Input label="Type" type="text" handler={typeHandler} />
              </div>
              <div className="elements">
                <Input label="City" type="text" handler={cityHandler} />
              </div>
              <div className="elements">
                <Input label="Price" type="text" handler={priceHandler} />
              </div>
              <div className="elements">
                <Input label="Image" type="file" handler={imageHandler} />
              </div>
            </div>
            <Button label="Submit" handler={submit} />
          </div>
        </div>
      );
    }
    
    
