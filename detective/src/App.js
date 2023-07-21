import React from "react";
import {
  Routes,
  Route,
} from "react-router-dom";
import Header from "./components/Header/Header.jsx";
import Main from "./pages/Main/Main.jsx";
import FAQ from "./pages/FAQ/FAQ";
import Footer from "./components/Footer/Footer";


function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route exact path="/" element={<Main />} />
        <Route exact path="/form" element={<FAQ />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
