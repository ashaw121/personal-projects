import logo from './logo.svg';
import './App.css';
import React from 'react';
import NavBar from './components/navbar';
import Hero from './components/hero';

function App() {
  return (
    <React.Fragment>
      <NavBar />
      <Hero />
    </React.Fragment>
  );
}

export default App;
