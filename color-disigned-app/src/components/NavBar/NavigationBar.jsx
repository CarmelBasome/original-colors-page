import React from "react";
import './NavigationBar.css';
import { Link } from "@mui/material";

const oxide = 'https://oxide-digital.com/';

function NavigationBar() {
    
    return <>
       <header className="section">
          <img src="logo.png" alt="Logo" />
          <ul>
               <li>
                   <Link to="/" >Home</Link>
               </li>
               <li className="start">
                   <Link to="/buttons" >Start</Link>
               </li>
               <li>
                  <a href="https://oxide-digital.com/">Visit us</a>
               </li>
          </ul>
       </header>      
    </>
}
export default NavigationBar;