import React from 'react'
import './navbar.css'
// import { Link } from 'react-router-dom';
import {Link as LinkRoll} from "react-scroll";
// import {Link} from 'react-router-dom'
// import ContactUs from './contactUs'
import './navbar.css'

function navbar() {
  return (
    <nav className="navbar">
      <div className="logo">
        <p><LinkRoll to='./App.js'>Agrotix</LinkRoll></p>
      </div>
      <div className="nav-links">
        <li><LinkRoll to="#home">Home</LinkRoll></li>
        <li><LinkRoll to="#about">About</LinkRoll></li>
        <li><LinkRoll to="#services">Services</LinkRoll></li>
        <li><LinkRoll to='#contactUs'>Contact-Us</LinkRoll></li>
       
      </div>
    </nav>
  )
}

export default navbar