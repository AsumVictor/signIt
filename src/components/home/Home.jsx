import React from "react";
import Detect from "../Detect/Detect";
import Navbar from "../navbar/Navbar";

const Home = () => {
  return (
    <div className=" h-full w-full relative px-3 py-3">
     <Navbar />
      <div className="px-5 py-4 render_space w-full h-full absolute top-0 left-0 overflow-hidden ">
        <Detect className='w-full h-full' />
      </div>
      
    </div>
  );
};

export default Home;
