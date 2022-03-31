import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Bookslist from './components/BooksList';
import Footer from './components/Footer';



function App() {
  return (
    <div className="App">
      <Navbar />
      <Bookslist/>
      <Footer />
    </div>
  );
}

export default App;
