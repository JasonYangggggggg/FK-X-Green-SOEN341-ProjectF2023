"use client";
import React, { useEffect, useRef, useState } from 'react';
import './input.css';
import Button from '@/app/_components/_button/button';

export default function Input({label, type, handler} : {label: string, type: string, handler: any}) {

    let classes = "";
    let upload = null;
    // let ref = useRef<HTMLInputElement | null> (null);
    let element = null;

    const [isFile, setIsFile] = useState(false);


    // if (type.toLowerCase() === 'file'){
    //     classes += "hideFile";
    //     setIsFile(true);

    //     // const handler = ()=>{
    //     //     if(isFile){
    //     //         useEffect(()=>{
    //     //             ref.current?.click();
    //     //         }, []);
    //     //     }
    //     // }
    //     upload = (<Button label="Upload Image" handler={()=>{}}/>); 
    // }else {
    //     element = (<input type={type} placeholder={label} className={classes}/>)
    // }
    element = (<input type={type} placeholder={label} className={classes} onChange={handler}/>)

    if(type.toLowerCase() === 'select'){
        element = (<select placeholder={label}>
            <option disabled={true}>Select</option>
            <option>
                house1
            </option>
            <option>
                house2
            </option>
            
        </select>);
    }

    return (
        <>
            {element}
            {/* {isFile && <input type={type} placeholder={label} className={classes} ref={ref}/>} */}
        </>
                
    )

}