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
    let blob = [Home.toString()];
    blob.push(AboutMe.toString());
    blob.push(PeonComponent.toString());
    blob.push(Contact.toString());
    blob.push(Peon.toString());
    blob.push(Resume.toString());
    blob.push(Footer.toString());



    debugger;

    setBgText(blob);
    headingRef.textContent = bgtext;

  })

  return (
    <div>

      <div ref={headingRef} className="w-full h-screen absolute top-0 left-0 bg-black text-gray-800 z-[-1] pointer-events-none text-xs" ><h4 className='w-[1000px] mx-auto'>{...bgtext}</h4></div>
      <div className='flex flex-row flex-wrap justify-center items-start pt-8'>
        <NavBar></NavBar>
        <Outlet />
        <Footer />
      </div>
    </div>

  );
}
