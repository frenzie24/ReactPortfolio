import React from "react";
import Contact from "./Contact";
import Resume from "./Resume";

const ResumeView = ({ }) => {
  return (

    <div className='w-screen flex flex-row flex-wrap justify-center [&_*]:p-1 pb-20'>
      <div className="flex flex-row w-fit flex-wrap justify-center items-center bg-[#262626]/80 rounded-lg">
        <div className="p-4" ><Contact /></div>
        <div className="p-4" ><Resume /></div>
      </div>
    </div>
  )
}

export default ResumeView;