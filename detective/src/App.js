// import logo from './logo.svg';
import React from "react";
import './App.css';
import {
  Routes,
  Route,
} from "react-router-dom";
import Header from "./components/Header/Header.jsx";
import Main from "./pages/Main/Main.jsx";


function App() {
  return (
    <div className="App">
      <Header />

      <Routes>
        <Route exact path="/" element={<Main />} />

        {/* <Route path="*" element={<NoMatch />} /> */}
      </Routes>
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
