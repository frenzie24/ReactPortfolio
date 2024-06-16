import React, { useState, useEffect, useRef } from 'react';
import AboutMe from './components/AboutMe';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Resume from './components/Resume';
import PeonComponent from './components/PeonComponent';
import Footer from './components/Footer';
import Home from './components/HomePage';

import { Outlet } from 'react-router-dom';
import NavBar from './components/NavBar';
import Peon from './scripts/peon';
export default function App() {
  const [route, setRoute] = useState(window.location.hash.substr(1));
  const [bgtext, setBgText] = useState('');
  const headingRef = useRef(null);
  useEffect(() => {
    window.addEventListener('hashchange', () => {
      setRoute(window.location.hash.substr(1));
    });
  }, []);

  useState(() => {

    //Peon.prototype.toJSON
    let blob = [Peon.toString()];
    blob.push(AboutMe.toString()); blob.push(Peon.toString());
    blob.push(PeonComponent.toString());
    blob.push(Contact.toString()); blob.push(Peon.toString());
    blob.push(Peon.toString());
    blob.push(Portfolio.toString())
    blob.push(Resume.toString()); blob.push(Peon.toString());
    blob.push(Footer.toString());
    //blob = [...blob]


    debugger;

    setBgText(blob);
    headingRef.textContent = bgtext;

  })

  return (
    <div className='w-full flex flex-row flex-wrap jusitfy-center'>

      <Outlet />

      <Footer />
      <div ref={headingRef} className="w-screen bg-clip-content	background-clip: content-box; absolute top-0 left-0 bg-black text-gray-800 z-[-1] pointer-events-none text-xs" ><h4 className='w-[1000px] mx-auto'>{...bgtext}</h4></div>

    </div>

  );
}
