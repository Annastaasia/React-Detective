import React from "react";
import {
  Routes,
  Route,
} from "react-router-dom";
import Header from "./components/Header/Header.jsx";
import Main from "./pages/Main/Main.jsx";
import FAQ from "./pages/FAQ/FAQ";
import Footer from "./components/Footer/Footer";
import Contacts from "./pages/Contacts/Contacts.jsx";


function App() {
  return (
    <div className="App">
      <Header />
      <Routes>

        <Route exact path="/" element={<Main />} />
        <Route exact path="/form" element={<FAQ />} />
        <Route exact path="/contacts" element={<Contacts />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
