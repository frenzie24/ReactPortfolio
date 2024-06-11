import React, { useState, useEffect } from 'react';
import AboutMe from './components/AboutMe';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Resume from './components/Resume';
import PeonComponent from './components/PeonComponent';
import Footer from './components/Footer';
import Home from './components/HomePage';

export default function App() {
  const [route, setRoute] = useState(window.location.hash.substr(1));

  useEffect(() => {
    window.addEventListener('hashchange', () => {
      setRoute(window.location.hash.substr(1));
    });
  }, []);

  return (
    <div className="App flex flex-col items-center min-h-screen">
      <header className="bg-slate-800 text-white p-4">
        <h1 className="text-xl font-bold mb-2">My Portfolio</h1>
        <nav>
          <ul className="flex space-x-4 [&_*]:text-gray-200">
            <li><a href="#home">Home</a></li>
            <li><a href="#peon">PeonComponent</a></li>
            <li><a href="#about">About Me</a></li>
            <li><a href="#portfolio">Portfolio</a></li>
            <li><a href="#contact">Contact</a></li>
            <li><a href="#resume">Resume</a></li>
          </ul>
        </nav>
      </header>
      <section className='flex-grow text-grey-200'>
        {route == "home" && <Home />}
        {route === 'peon' && <PeonComponent />}
        {route === 'about' && <AboutMe />}
        {route === 'portfolio' && <Portfolio />}
        {route === 'contact' && <Contact />}
        {route === 'resume' && <Resume />}
      </section>
      <Footer />
    </div>
  );
}
