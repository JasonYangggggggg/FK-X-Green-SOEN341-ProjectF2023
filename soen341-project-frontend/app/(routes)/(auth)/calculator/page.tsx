"use client";
import React from 'react';
import { useState } from 'react';
import "./calculator.css";
import Image from 'next/image';
import mortgageImg from "./mortgage.png";


const Calculator = () => {
   const[downPayment,setDownPayment] = useState('');
   const[homePrice,setHomePrice] = useState('');
   const[interestRate,setInterestRate] = useState('');
   const[years,setYears] = useState('');
   const [total, setTotal] = useState(null);


  


   const handleClick = () => {
       const downPaymentValue = parseFloat(downPayment);
       const homepriceValue = parseFloat(homePrice);
       const interestValue = parseFloat(interestRate);
       const yearsValue = parseFloat(years);


       const P = homepriceValue - downPaymentValue;
       const months = yearsValue * 12;
       const rate = 1 + (interestValue/100)/12;
       const rateMonths = rate ** months;
       const numerator = P * ((interestValue/100)/12) * rateMonths;
       const denominator = rateMonths -1;


       const mortgage = numerator/denominator;


       if (!isNaN(downPaymentValue) && !isNaN(homepriceValue )) {
           const sum = downPaymentValue + homepriceValue ;
           setTotal(mortgage.toFixed(4));
       }
   };
  
 return (
   <div className='container'>
   <div className='textWithImage'>
       <div className='left'>
       <div className = "sentence">Calculate Your</div>
       <div className = "sentence">Mortgage Here</div>
       </div>
       <Image className = "image"src = {mortgageImg} alt= "" width = "350"/>
   </div>
   <div className="inputWithIcon">
       <input  className = "elements" type ="text" value = {homePrice}  onChange={(e) => setHomePrice(e.target.value)}
               placeholder='Enter home price'></input><span>$</span>
   </div>
   <div className="inputWithIcon">
       <input  className = "elements" type ="text" value = {downPayment}  onChange={(e) => setDownPayment(e.target.value)}
               placeholder='Enter down payment' ></input><span>$</span>
   </div>
   <div className="inputWithIcon">
       <input  className = "elements" type ="text" value = {interestRate}  onChange={(e) => setInterestRate(e.target.value)}
               placeholder='Enter yearly interest rate'></input><span>%</span>
   </div>
   <div className="inputWithIcon">
       <input  className = "elements" type ="text" value = {years}  onChange={(e) => setYears(e.target.value)}
               placeholder='Enter duration in years'></input><span>Y</span>
   </div>
  
  




   <button className = "button" onClick={handleClick}>Calculate</button>
           {total !== null && <div className='messageButton'>Your Mortage would be
               <div className='total'>{total}$</div></div>}
   </div>
 )
}


export default Calculator
