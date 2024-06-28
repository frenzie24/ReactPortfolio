import React, { useState, useEffect, useRef } from 'react';
import AboutMe from './components/AboutMe';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Resume from './components/Resume';
import PeonComponent from './components/PeonComponent';
import Footer from './components/Footer';
import Home from './components/HomePage';
import TypingAnimation from './components/TypingAnimation';
import { Outlet } from 'react-router-dom';
import NavBar from './components/NavBar';
import Peon from './scripts/peon';


function flattenArray(arr) {
  return arr.reduce((acc, val) => Array.isArray(val) ? acc.concat(flattenArray(val)) : acc.concat(val), []);
}

export default function App() {
  const [route, setRoute] = useState(window.location.hash.substr(1));

  const [hidden, setHidden] = useState(true);

  const [homeHidden, setHomeHidden] = useState(true);
  const [footerHidden, setFooterHidden] = useState(true);
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

    // }, 200)
    // headingRef.textContent = bgtext;





  }, [])

  useEffect(() => {
    if (blob) {

      //cursor represents the current index in blob[]
      // inputCursor represnt the current index in blob[cusror][inputCurosor]
      if (cursor >= blob.length) {
        setCursor(0);
        setInputCursor(0);
      }

      // we need to manipulate the data in the state vairable blob,
      // so we create bloo to work with.  also simplies reading from blob[cursor][ic] to bloo[ic]
      let bloo = blob[cursor] ? blob[cursor] : ':O';

      if (inputCursor >= bloo.length - 1) {
        let c = cursor + 1;
        setCursor(c);
        setInputCursor(-1);
        setBgInput([...bgtext, bgInput]);
        //  setBgInput('');
        debugger;
      }

      else {
        let ic = inputCursor + 1;
        let newtext = bgInput + bloo.charAt(ic);
        setInputCursor(ic);
        let timer = setTimeout(() => {
          setBgInput(newtext);
          clearTimeout(timer);
        }, 1)
      }
    }
  }, [bgtext, blob, bgInput])


  const handleAnimationComplete = () => {
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



    _blob = flattenArray(_blob)





    let j = -1;
    // setInterval(() => {
      setBlob(["import App from './App.jsx\'", ..._blob]);
      setBgText('');
      setBgInput('');
   /* setTimeout(() => {
      //setBgInput("import App from './App.jsx'")
      setTimeout(() => {

      }, 50)
    }, 100)*/
    setHidden(false);
  };

  useEffect(() => {

    if (!hidden)
      setTimeout(() => {
        setFooterHidden(false);
      }, 1500)
  }, [hidden])

  useEffect(() => {
    if(!footerHidden)
    setTimeout(() => {
      setHomeHidden(false);
    }, 2000)
  }, [footerHidden])

  useEffect(() => {
    // Update the height state to match the outletRef's current height
    if (outletRef.current) {
      setHeight(outletRef.current.clientHeight);
    }
  }, [outletRef.current]);

  return (
    <div className='w-screen flex flex-row flex-wrap justify-center'>

      <TypingAnimation useAnimationComplete={handleAnimationComplete} />

      {hidden ? (<></>) : (<div className='absolute top-0 left-0 z-[-2] h-screen w-screen bg-black/70'>
        <div ref={headingRef} className={`w-screen h-screen fixed bottom-0 left-0 bg-black text-gray-400 z-[-1] pointer-events-none text-xs font-mono `}>
          <div className='w-full h-full flex items-end'>
            <h4 className={`w-10/12 h-[${height ? height : 1000}px] text-clip overflow-hidden opacity-50 border-2 border-double border-zinc-800 mx-auto px-4 py-12`}>{...bgInput + '_'}</h4>
          </div>
        </div>
      </div>)}

      {homeHidden ? <></> :
        (<div className="" ref={outletRef}>
          <Outlet />
        </div>)}
      {footerHidden ? <></> :
        <div ref={footerRef}>
          <Footer />
        </div>
      }

    </div >

  );
}

