// import logo from './logo.svg';
import React from "react";
import './App.css';
// import {
//   Routes,
//   Route,
// } from "react-router-dom";
import Header from "./components/Header/Header.jsx";


function App() {
  return (
    <div className="App">
      <Header />
      
      {/* <Routes>
        <Route exact path="/game" element={<CardLearn />} />
        <Route exact path="/English-words-card" element={<TableMap />} />

        <Route path="*" element={<NoMatch />} />
      </Routes> */}
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
      </header>  */}
    </div>
  );
}

export default App;
