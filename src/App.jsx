import React, { useState, useEffect } from 'react';
import AboutMe from './components/AboutMe';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Resume from './components/Resume';
import PeonComponent from './components/PeonComponent';
import Footer from './components/Footer';
import Home from './components/HomePage';

import { Outlet } from 'react-router-dom';
import NavBar from './components/NavBar';

export default function App() {
  const [route, setRoute] = useState(window.location.hash.substr(1));

  useEffect(() => {
    window.addEventListener('hashchange', () => {
      setRoute(window.location.hash.substr(1));
    });
  }, []);

  return (
    <div className="App flex flex-col items-center min-h-screen">

      <NavBar/>
      <Outlet />

      <Footer />
    </div>
  );
}
