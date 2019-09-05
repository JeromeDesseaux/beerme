import React from 'react';
// import logo from './logo.svg';
import Card from "./components/Card";
import IndexPage from "./components/Index";
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="container">
      <IndexPage />
        </div> 
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
    </div>
  );
}

export default App;
