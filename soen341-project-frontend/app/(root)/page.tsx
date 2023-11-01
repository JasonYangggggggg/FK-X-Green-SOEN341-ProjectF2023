'use client';
import './page.css';
import Input from '../_components/_input/input';
import Button from '../_components/_button/button';
import Listing from '../_components/_listing/listing';
export default function Home() {
  return (
   <div className="main-ladning">
      <h1>Find Your Dream Home</h1>
      <p>Find a nice house using below filter!</p>
     <Listing/>
      
   </div>
  )
}
