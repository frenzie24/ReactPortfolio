

import Canvas from './Canvas.jsx'
import Peon from '../scripts/peon.js';
import React from 'react';
import { useLocation, useBeforeUnload, useBlocker } from 'react-router-dom';
import { useEffect, useState } from 'react';
import '../video.css'
function PeonComponent() {

  const location = useLocation();


  // const audioRef = useRef(null);
  // callback hook to pass to canvas


  const [firstRun, setFirstRun] = useState(true);
  const [music, setMusic] = useState();
  const [peons, setPeons] = useState([]);
  let debugMode = false;
  let width = 900;
  const height = 500;
  const topUI = new Image();
  const botUI = new Image();
  const bg = new Image();

  topUI.src = "./src/assets/topui.png";
  botUI.src = "./src/assets/bottomui.png";
  bg.src = "https://cdna.artstation.com/p/marketplace/presentation_assets/000/500/478/large/file.jpg?1598966424"
  
  //let firstRun = true;
  let gameLoop;
  const draw = context => {


    if (firstRun) {
     //peons = [];
      console.log('pushing new peon')
      let count = 0;
      const _peons = [new Peon(context, debugMode)];
      setPeons(_peons);
//      peons.push(new Peon(context, debugMode));
      /*  let peonInterval = setInterval(() => {
        let leon = new Peon(context, debugMode);

        leon.setActive(true);
        peons.push(leon);
        if (++count == 1)
          clearInterval(peonInterval);
      }, 10000);
*/

      gameLoop = setInterval(() => {
        context.clearRect(0, 0, width, height)

        context.drawImage(bg, 0, (height - bg.height) / 2, bg.width, bg.height, 0, (height - bg.height)/2, bg.width*2, bg.height );
//        const _peons = peons;

        _peons.forEach(peon => {
          peon.update();
          if (peon.getDebugMode() != debugMode) peon.setDebugMode(debugMode);
          peon.draw();
        });
        context.drawImage(topUI, (width - topUI.width) / 2, 0);
        context.drawImage(botUI, (width - botUI.width) / 2, height - botUI.height);


      }, 100)

      console.log(`current peon count: ${peons.length}`);
    }


  };


  function handleCanvasClick(e) {
    if (firstRun) {
      const _music = new Audio("./src/assets/sounds/Orc02.mp3");
      _music.addEventListener("canplaythrough", (ev) => {
        console.count('loading audtio')
        _music.play()
        _music.volume = 0.25;
      });
      _music.addEventListener('ended', function () {
        _music.currentTime = 0;
        _music.play();
      }, false);
      setFirstRun(false);
      const _peons = peons;

      _peons.map(peon => {
        peon.setActive(true);
      });
      setMusic(_music);
      setPeons(_peons)
    }
    e.preventDefault();
    const x = e.clientX;
    const y = e.clientY;
    peons.map(peon => {

      if (peon.isLoaded()) {
        peon.setActive(peon.checkClicked(x, y))
        music.play();
      } //else peon.setActive(true);
     // if (peon.getActive()) //music.play();
      // else music.pause();
      // peon.setActive(true);

    })
  }

  const onKeyDown = (ev) => {
    ev.preventDefault();
    if (ev.key == 'd') debugMode = !debugMode;
    if (ev.key == 's' || 'p' || 'spacebar') {

      peons.forEach(peon => {
        peon.setActive(!peon.getActive())
        debugger;
        if (!peon.getActive()){ music.pause();}
        else music.play();
      })
    }



  }

  useBlocker(() => {
  
    if (peons && music) {
      setPeons([]); music.pause();
     setMusic(undefined)
      clearInterval(gameLoop);
    }
    console.log("URL changed");
  });




  return (
    <div className='flex flex-row flex-wrap justify-center align-center w-screen'>
      <div className={`container flex flex-row flex-wrap justify-center align-center max-w-[800px] sm:w-fit h-250`} tabIndex={0} onKeyDown={(ev) => { onKeyDown(ev) }}>

        <Canvas handleClick={handleCanvasClick} draw={draw} height={height} width={width} on />

      </div></div>
  )
}

export default PeonComponent
