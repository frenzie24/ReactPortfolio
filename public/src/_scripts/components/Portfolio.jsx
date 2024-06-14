import React from 'react';
import './App.css'
import Tile from '/Tile';
export default function Portfolio() {
  const jeans = {
    url:'https://frenzie24.github.io/jeans/',
    image:"/assets/images/jeans.png",
    name: 'Jeans'
  }
  return (
    <section className="max-w-[900px] grid grid-cols-1 md:grid-cols-3 gap-4 p-4" >
      <Tile
      url={jeans.url}
      image={jeans.image}
      name={jeans.name}></Tile>
      <Tile
      url={'https://www.npmjs.com/package/@frenzie24/logger'}
      image={"/assets/images/loggerSS.png"}
      name={"logger"}
      description={"I wrote an light-weight npm package to make reading CLI debugging output a tolerable experience.  Please take a look!  He's been invaluable in helping me :D"}
      >
      </Tile>
      <Tile
      url={jeans.url}
      image={jeans.image}
      name={jeans.name}></Tile>
      <Tile
      url={'https://www.youtube.com/watch?v=t6q0KIFRm2s'}
      image={"/assets/images/ardemo.png"}
      name={"Augmented Reality"}
      description={"A video project from my days in school researching augmented reality"}
      >
      </Tile>
      <Tile
      url={jeans.url}
      image={jeans.image}
      name={jeans.name}></Tile>
      <Tile
      url={'https://www.npmjs.com/package/@frenzie24/logger'}
      image={"/assets/images/loggerSS.png"}
      name={"logger"}
      description={"I wrote an light-weight npm package to make reading CLI debugging output a tolerable experience.  Please take a look!  He's been invaluable in helping me :D"}
      >
      </Tile>
    </section>
  );
}