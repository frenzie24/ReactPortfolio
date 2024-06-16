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


function flattenArray(arr) {
  return arr.reduce((acc, val) => Array.isArray(val) ? acc.concat(flattenArray(val)) : acc.concat(val), []);
}

export default function App() {
  const [route, setRoute] = useState(window.location.hash.substr(1));
  const [bgtext, setBgText] = useState([]);
  const [bgInput, setBgInput] = useState()
  const [height, setHeight] = useState();
  const [blob, setBlob] = useState('');
  const [cursor, setCursor] = useState(0);
  const [inputCursor, setInputCursor] = useState(-1);

  const headingRef = useRef(null);
  const outletRef = useRef(null);
  const footerRef = useRef(null);
  // const
  useEffect(() => {
    window.addEventListener('hashchange', () => {
      setRoute(window.location.hash.substr(1));
    });
  }, []);

  useEffect(() => {

    //Peon.prototype.toJSON
    let _blob = [Peon.toString()];
    _blob.push(AboutMe.toString());
    _blob.push(Peon.toString());
    _blob.push(PeonComponent.toString());
    _blob.push(Contact.toString());
    _blob.push(Peon.toString());
    //blob.push(Peon.toString());
    _blob.push(Portfolio.toString())
    //blob.push(Resume.toString()); blob.push(Peon.toString());
    //blob.push(Footer.toString());
    //blob = [...blob]

    _blob.map((b) => {
      b = b.toString()
      return b.match('\\n') != -1 ?b.split('\\n'): b;
    });

    _blob = flattenArray(_blob)





    let j = -1;
    // setInterval(() => {

    setTimeout(() => {
      //setBgInput("import App from './App.jsx'")
      setTimeout(() => {
        setBlob(["import App from './App.jsx\\n'", ..._blob]);
        //setBgText('import {Frenzie} from "self";');
        setBgInput('');
      }, 500)
    }, 500)
    // }, 200)
    // headingRef.textContent = bgtext;





  }, [])

  useEffect(() => {
    if (blob) {
      if (cursor >= blob.length) {
        setCursor(0);
        setInputCursor(0);
      }
      //else cursor++;
      let bloo = blob[cursor] ? blob[cursor] : ':O';

      if (inputCursor >= bloo.length - 1) {
        let c = cursor + 1;
        setCursor(c);
        setInputCursor(0);
        setBgInput([...bgtext, bgInput]);
      //  setBgInput('');
        debugger;
      }

      else {
        let ic = inputCursor + 1;
        let newtext = bgInput + bloo.charAt(ic);
        setInputCursor(ic);
        setTimeout(() => {
          setBgInput(newtext);
        }, 1)
      }
    }
  }, [bgtext, blob, bgInput])

  useEffect(() => {
    // Update the height state to match the outletRef's current height
    if (outletRef.current) {
      setHeight(outletRef.current.clientHeight);
    }
  }, [outletRef.current]);

  return (
    <div className='w-full flex flex-row flex-wrap justify-center'>
      <div className="bg-black bg-opacity-5 backdrop-blur-[1px]" ref={outletRef}>
        <Outlet />
      </div>

      <div ref={footerRef}>
        <Footer />
      </div>

      <div ref={headingRef} className={`w-screen h-screen fixed bottom-0 left-0 bg-black text-yellow-400 z-[-1] pointer-events-none text-xs`}>
        <h4 className={`w-[1000px] h-[${height ? height : 1000}px] fixed bottom-0 left-[25%] mx-auto text-clip overflow-hidden border-2 border-double border-zinc-800 mx-auto px-4 py-12`}>{...bgInput + '_'}</h4>
      </div>
    </div>

  );
}

