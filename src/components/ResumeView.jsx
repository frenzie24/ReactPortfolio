import React from "react";
import Contact from "./Contact";
import Resume from "./Resume";

const ResumeView = ({ }) => {
  return (

    <div className='w-screen flex flex-row flex-wrap justify-center items-center [&_*]:p-1'>
      <div className="p-4" ><Contact /></div>
      <div className="p-4" ><Resume /></div>
    </div>
  )
}

export default ResumeView;