import React from 'react';
import logo from './logo.svg';
import './App.css';
import test from "./js/test"

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
          {test("WoRlD")}
        </p>
        <a
          className="App-link"
          href="spa.html"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <script src="./../public/test1.js" />
    </div>
  );
}

export default App;
