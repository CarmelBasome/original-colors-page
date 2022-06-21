/*
import React from "react";
import "./App.css";
import Hooks from "./components/Hooks/Hooks";

function App() {
  return (
    <div className="App">      
      <Hooks text='First Todo'/>
      <Hooks text='Second Todo'/>
      <Hooks text='Third Todo'/>
    </div>
  );
}
export default App;
*/


import React  from "react";
import { AppBar } from "@mui/material";

import NavigationBar from './components/NavBar/NavigationBar';
import Page from './Pages/Page';

                
function App() {
  return(
    <div>
      <AppBar>
        <NavigationBar />
      </AppBar>
      <Page />
    </div>
  );
}
export default App;