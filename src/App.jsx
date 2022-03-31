import React from 'react';
import './App.css';
import Bookslist from './components/booksList';
import Navbar from './components/Navbar'
import Header from './components/Header';
import Footer from './components/footer';
import Login from './components/Login';


function App() {
  return (
    <div className="App">
      <Login/>
      <Navbar/>
      <Header/>
      <Bookslist/>
      <Footer/>
     </div>
  );
}

export default App;
