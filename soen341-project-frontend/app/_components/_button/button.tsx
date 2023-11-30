"use client";
import React from 'react';

import './button.css';

const Input  = ({label, handler} : {label : String, handler: any}) => {

    return (
        <button onClick={handler}>{label}</button>
    )

}

export default Input;