import React from "react";
import "./App.css";
import Navbar from "./components/Global/Navbar";
import Bookslist from "./components/Search/booksList";
import Footer from "./components/Global/Footer";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./screen/Home";
import About from "./screen/About";
import LogOut from "./components/Global/LogOut";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/bookList" element={<Bookslist />} />
          <Route exact path="/AboutUs" element={<About />} />
          <Route exact path="/logout" element={<LogOut />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
