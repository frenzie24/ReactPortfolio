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


        <section className={`flex flex-row max-w-[800px] sm:w-fit  flex-wrap py-10 justify-center fadeInAnimation`}>
          <ul>
            <li className="pt-8"><AboutMe /></li>
            <li className="pt-8"><Portfolio /></li>
            <li className='pt-8'><ResumeView /></li>
          </ul>
        </section>

    </>
  );
}

export default Home;
