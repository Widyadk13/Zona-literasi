import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Landingpage from './components/LandingPage';
import Header from './components/Header';
import Bookslist from './components/booksList';
import Footer from './components/Footer';



function App() {
  return (
    <div className="App">
      <Navbar />
      <Landingpage />
      <Header />
      <Bookslist />
      <Footer />
    </div>
  );
}

export default App;
