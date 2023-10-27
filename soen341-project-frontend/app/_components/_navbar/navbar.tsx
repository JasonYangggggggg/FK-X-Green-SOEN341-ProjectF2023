"use client";
import React from 'react';
import './navbar.css';
import Link from 'next/link';

const Navbar = () => {
   
    return (
        <div className="nav-bar">
            <button className="loginBtn">Login</button>
            <button className="registerBtn">Register</button>
            <button className="addBtn" ><Link href="/addHouse">Add House</Link></button>
        </div>
    )
};

export default Navbar;