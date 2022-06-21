import React from "react";
import './NavigationBar.css';
import { Link } from "@mui/material";

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
                  <Link to="" >Visit us</Link>
               </li>
          </ul>
       </header>      
    </>
}
export default NavigationBar;