import React from "react";
import { motion } from "framer-motion";
function Tool({
  icon2,
  text2,
  value,
  focus,
  icon,
  text,
  action,
  className = "text-primary-400",
}) {
  return (
    <motion.button
      whileHover={{
        scale: 1.3,
        transition: { duration: .1, },
        
      }}
      whileTap={{ scale: 0.8 }}
      className={`${className} shadow-md w-[1.4cm] h-[1.4cm] rounded-2xl bg-[#b2b0be53] flex justify-center items-center py-1 px-1 cursor-pointer flex-col`}
      onClick={() => action()}
    >
      <div className=" text-2xl">{value ? icon2 : icon}</div>
      <span className=" uppercase text-[9px] font-extrabold">
        {value ? text2 : text}
      </span>
    </motion.button>
  );
}

export function ToolBig({
  icon2,
  text2,
  value,
  focus,
  icon,
  text,
  action,
  className = "text-primary-400",
}) {
  return (
    <motion.button
      whileHover={{
        scale: 1.1,
        transition: { duration: .1, },
        
      }}
      whileTap={{ scale: 0.8 }}
      className={`${className} shadow-md w-[2.5cm] h-[2.5cm] rounded-3xl bg-[#920b0b] flex justify-center items-center py-1 px-1 cursor-pointer flex-col`}
      onClick={() => action()}
    >
      <div className=" text-4xl text-white">{value ? icon2 : icon}</div>
      <span className=" uppercase text-[9px] font-extrabold text-white mt-2">
        {value ? text2 : text}
      </span>
    </motion.button>
  );
}

export default Tool;
