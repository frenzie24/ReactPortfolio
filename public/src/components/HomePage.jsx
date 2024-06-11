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

      <section className='flex-grow'>
        <PeonComponent/>
        <AboutMe />
        <Portfolio />
        <Contact />
        <Resume />
      </section>


  );
}

export default Home;