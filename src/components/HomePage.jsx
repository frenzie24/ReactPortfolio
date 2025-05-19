import React, { useState, useEffect } from 'react';
import '../App.css';

// Import your individual components
import AboutMe from './AboutMe';
import Portfolio from './Portfolio';
import PeonComponent from './PeonComponent';
import ResumeView from './ResumeView';
import TypingAnimation from './TypingAnimation';

function Home() {
  const [hidden, setHidden] = useState(true);
  const [opacity, setOpacity] = useState('opacity-0');


  useEffect(() => {
    if (!hidden) {
      setOpacity('opacity-100');
    }
  }, [hidden]);

  return (
    <>


        <section className={`flex flex-row flex-wrap max-w-[800px] sm:w-fit flex-wrap justify-center fadeInAnimation`}>
          <ul>
            <li className="py-12"><AboutMe /></li>
            <li className=''><ResumeView /></li>
            <li className="py-12"><Portfolio /></li>

            <li className='pb-24'><PeonComponent /></li>
          </ul>
        </section>

    </>
  );
}

export default Home;
