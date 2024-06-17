import React from "react";

function Tool({ hero, icon, text, action, className='text-primary-400' }) {
    

  return (
    <div className={`${className} shadow-md w-[1.4cm] h-[1.4cm] rounded-2xl bg-[#b2b0be53] flex justify-center items-center py-1 px-1 cursor-pointer flex-col`}
    onClick={()=>action()}
    >
      <div className=" text-2xl">{icon}</div>
      <span className=" uppercase text-[9px] font-extrabold">{text}</span>
    </div>
  );
}

export default Tool;
