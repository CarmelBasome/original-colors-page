import React, {useState} from 'react';
import './App.css';
import Hooks from './components/Hooks/Hooks';
import Page from './components/script';
import Buttons from './components/Buttons/buttons';

function App() {
  return (
    <div className="App">
      <Hooks />
      <Page />
      <Buttons />
    </div>
  );
}

export default App;
