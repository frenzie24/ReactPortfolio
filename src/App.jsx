import React from 'react';
import './App.css';

// Import your individual components
import Header from './components/Header';
import Tiles from './components/Tiles';
import AboutMe from './components/AboutMe';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Resume from './components/Resume';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App flex flex-col min-h-screen">
      <Header />
      <section className='flex-grow'>
        <Tiles />
        <AboutMe />
        <Portfolio />
        <Contact />
        <Resume />
      </section>
      <Footer />
    </div>
  );
}

export default App;