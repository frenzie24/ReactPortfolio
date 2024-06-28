import React from "react";
import Contact from "./Contact";
import Resume from "./Resume";

const ResumeView = ({ }) => {
  return (

    <div className='w-screen flex flex-row flex-wrap justify-center pt-8 pb-20'>
      <div className="md:w-[800px] sm:w-fit flex flex-row flex-wrap  w-content justify-center items-center bg-[#262626]/90 rounded-lg">

        <div className="p-1" ><Resume /></div>
        <div className="p-1" ><Contact /></div>
      </div>
    </div>
  )
}

export default ResumeView;