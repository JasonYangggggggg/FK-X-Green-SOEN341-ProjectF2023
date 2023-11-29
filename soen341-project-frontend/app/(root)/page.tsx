'use client';
import './page.css';
import Input from '../_components/_input/input';
import Button from '../_components/_button/button';
import {useState,useEffect} from 'react';
import axios from 'axios';
import {useRouter} from 'next/navigation';

const sayhi = async()=> {
  try {
          const response = await axios.post('http://localhost:3001/logout');
          if (response.data.success) {
              // Redirect or perform any additional actions after logout
              console.log(response.data);
              window.location.reload();
          } else {
              console.error('Logout failed');
          }
      } catch (error) {
          console.error('Error during logout:', error);
      }
}
function Home() {
  const [name, setName] = useState('');
  const userouter = useRouter();
  axios.defaults.withCredentials = true;
  useEffect(()=> {
  axios.get('http://localhost:3001').then(res => {
    //console.log(res.data.name.Role);
    if(res.data.Login){
      setName(res.data.user);
      //now it will go to the addhouse route if the role is the person is broker
      // if(res.data.name.Role == "Broker"){
      //   userouter.push("/addHouse");
      // }
      
    }
    else{
      userouter.push('/login');
    }
  }).catch(err => console.log(err))
  },[]);
  return (
   <div className="main-ladning">
      <h1>Find Your Dream Home</h1>
      <p>Find a nice house using below filter!</p>
      <div className="search-div">
        <Input label="Keyword" type="text" handler={()=>{}}/>
        <Input label="Type" type="select" handler={()=>{}}/>
        <Input label="City" type="text" handler={()=>{}}/>
        <Input label="Price" type="select" handler={()=>{}}/>
        <Button label="Search" handler={()=>{}}/>
        <Button label="Log out" handler={sayhi} />
      </div>
   </div>
  )
}

export default Home;
