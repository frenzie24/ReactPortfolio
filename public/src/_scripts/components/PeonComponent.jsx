

import Canvas from './Canvas.jsx'
import Peon from '../scripts/peon.js'
import '../video.css'
import '../style.css'
function PeonComponent() {

  // const audioRef = useRef(null);
  // callback hook to pass to canvas
  let peons;

  let debugMode = false;
  const width =900;
  const height = 500;
  const topUI = new Image();
  const botUI = new Image();
  const bg = new Image();

  topUI.src = "./assets/topui.png";
  botUI.src = "./assets/bottomui.png";
  bg.src = "https://cdna.artstation.com/p/marketplace/presentation_assets/000/500/478/large/file.jpg?1598966424"
  let music;
  let firstRun = true;
  const draw = context => {


    if (!peons) {
      peons = [];
      console.log('pushing new peon')
      let count = 0;
      peons.push(new Peon(context, debugMode));
      let peonInterval = setInterval(() => {
        let leon = new Peon(context, debugMode);
        leon.setActive(true);
        peons.push(leon);
        if (++count == 1)
          clearInterval(peonInterval);
      }, 10000);


      setInterval(() => {
        context.clearRect(0, 0, width, height)
        context.font = "48px serif";

        context.textAlign = 'center';
        context.strokeStyle = "Crimson"

        //context.fillText="black"
        const gratz = "GGWP, man!"

        context.strokeText(gratz, width / 2 - context.measureText(gratz).width / 4, height - 50);
        context.textAlign = 'center';
        context.fillText(gratz, width / 2 - context.measureText(gratz).width / 4, height - 50);

        context.drawImage(bg, 0, (height - bg.height) / 2)
        peons.forEach(peon => {
          peon.update();
          if (peon.getDebugMode() != debugMode) peon.setDebugMode(debugMode);
        });
        context.drawImage(topUI, (width - topUI.width) / 2, 0);
        context.drawImage(botUI, (width - botUI.width) / 2, height - botUI.height);


      }, 100)

      console.log(`current peon count: ${peons.length}`);
    }


  };


  function handleCanvasClick(e) {
    if (firstRun) {
      music = new Audio("./assets/sounds/Orc02.mp3");
      music.addEventListener("canplaythrough", (ev) => {
        console.count('loading audtio')
        music.play()

      });
      music.addEventListener('ended', function () {
        music.currentTime = 0;
        music.play();
      }, false);
      firstRun = false;
      peons.map(peon => {
        peon.setActive(true);
      });
    }
    e.preventDefault();
    const x = e.clientX;
    const y = e.clientY;
    peons.map(peon => {

      if (peon.isLoaded()) {
        peon.setActive(peon.checkClicked(x, y))
      } //else peon.setActive(true);
      if (peon.getActive()) music.play();
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
        if (peon.getActive()) music.play();
        else music.pause();
      })
    }



  }

  return (
    <div className={`container flex flex-row flex-wrap justify-center align-center w-full h-250`} tabIndex={0} onKeyDown={(ev) => { onKeyDown(ev) }}>





      <Canvas handleClick={handleCanvasClick} draw={draw} height={height} width={width} on />

    </div>
  )
}

export default PeonComponent