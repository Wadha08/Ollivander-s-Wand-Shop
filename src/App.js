import React from 'react';
import logo from './logo.svg';
import './App.css';
import wands from "./wands";
import List from "./List";

function App() {
  return (
    <div className="App">
      <List wand = {wands}/>
    </div>
  );
}

export default App;
