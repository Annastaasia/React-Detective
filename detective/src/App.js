// import logo from './logo.svg';
import React from "react";
import './App.css';
import {
  Routes,
  Route,
} from "react-router-dom";
import Header from "./components/Header/Header.jsx";
import Main from "./pages/Main/Main.jsx";
import FAQ from "./pages/FAQ/FAQ";


function App() {
  return (
    <div className="App">
      <Header />

      <Routes>
        <Route exact path="/" element={<Main />} />
        <Route exact path="/form" element={<FAQ />} />

        {/* <Route path="*" element={<NoMatch />} /> */}
      </Routes>
    </div>
  );
}

export default App;
