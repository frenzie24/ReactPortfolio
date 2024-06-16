import React from 'react';
import '../App.css';

// Import your individual components
import AboutMe from './AboutMe';
import Portfolio from './Portfolio';
import PeonComponent from './PeonComponent';
import ResumeView from './ResumeView'
function Home() {
  return (

    <section className='flex flex-row flex-wrap justify-center'>
      <ul>
        <li className ><PeonComponent /></li>
        <li className="pt-8" ><AboutMe /></li>
        <li className="pt-8" ><Portfolio /></li>
        <li className='pt-8' ><ResumeView /></li>

      </ul>
    </section>


  );
}

export default Home;