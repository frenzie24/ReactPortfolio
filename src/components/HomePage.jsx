import React from 'react';
import '../App.css';

// Import your individual components
import AboutMe from './AboutMe';
import Portfolio from './Portfolio';
import Contact from './Contact';
import Resume from './Resume';
import PeonComponent from './PeonComponent';

function Home() {
  return (

    <section className='flex flex-row flex-wrap grow justify-center'>
      <ul>
        <li className="p-4" ><PeonComponent /></li>
        <li className="p-8" ><AboutMe /></li>
        <li className="p-8" ><Portfolio /></li>
        <li className='flex flex-row flex-wrap justify-center [&_*]:p-1'>
          <li className="p-4" ><Contact /></li>
          <li className="p-4" ><Resume /></li>
        </li>
      </ul>
    </section>


  );
}

export default Home;